import express from 'express';
import { createServer as createViteServer } from 'vite';
import crypto from 'crypto';
import path from 'path';
import fs from 'fs';

const SECRET = process.env.JWT_SECRET || 'upfrica-super-secret-key-2026';
const USERS_FILE = path.join(process.cwd(), 'users.json');

// Simple JWT implementation using Node's crypto module
function createJWT(payload: any) {
  const header = { alg: 'HS256', typ: 'JWT' };
  const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', SECRET)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest('base64url');
  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

// Persistent user store
let users: any[] = [];
if (fs.existsSync(USERS_FILE)) {
  try {
    users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
  } catch (e) {
    console.error('Failed to parse users.json', e);
    users = [];
  }
}

function saveUsers() {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

const verificationCodes = new Map<string, { code: string; mode: string; selectedProduct?: string }>();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/auth/request-code', async (req, res) => {
    const { telegramId, mode, selectedProduct } = req.body;
    
    if (mode === 'signup' && users.find(u => u.telegramId === telegramId)) {
      return res.status(400).json({ error: 'User already exists' });
    }
    if (mode === 'login' && !users.find(u => u.telegramId === telegramId)) {
      return res.status(404).json({ error: 'User not found. Please sign up.' });
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    verificationCodes.set(telegramId, { code, mode, selectedProduct });
    
    let productName = 'UpFrica';
    if (mode === 'signup' && selectedProduct) {
      productName = selectedProduct.charAt(0).toUpperCase() + selectedProduct.slice(1);
    } else if (mode === 'login') {
      const user = users.find(u => u.telegramId === telegramId);
      if (user && user.selectedProduct) {
        productName = user.selectedProduct.charAt(0).toUpperCase() + user.selectedProduct.slice(1);
      }
    }

    const message = `Your ${productName} verification code is: ${code}`;
    
    try {
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      
      if (!botToken) {
        throw new Error('TELEGRAM_BOT_TOKEN is not configured in the environment variables.');
      }
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramId,
          text: message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Telegram API Error:', errorData);
        throw new Error(`Telegram delivery failed: ${errorData.description || 'Unknown error'}`);
      }
      
      res.json({ success: true, message: 'Code sent successfully', productName });
    } catch (error: any) {
      console.error('Failed to send message:', error);
      return res.status(500).json({ error: error.message || 'Failed to send verification code' });
    }
  });

  app.post('/api/auth/verify-code', (req, res) => {
    const { telegramId, code } = req.body;
    
    const savedData = verificationCodes.get(telegramId);
    if (!savedData || savedData.code !== code) {
      return res.status(400).json({ error: 'Invalid or expired verification code' });
    }
    
    verificationCodes.delete(telegramId);
    
    let user;
    if (savedData.mode === 'signup') {
      user = {
        id: 'usr_' + Math.random().toString(36).substr(2, 9),
        telegramId,
        name: 'User ' + telegramId.slice(-4),
        kycStatus: 'unverified',
        walletBalance: 0,
        usdcBalance: 0,
        selectedProduct: savedData.selectedProduct || 'dashboard',
        hasActiveSubscription: false // New users must pay
      };
      users.push(user);
      saveUsers();
    } else {
      user = users.find(u => u.telegramId === telegramId);
    }
    
    const token = createJWT({ id: user.id, telegramId: user.telegramId });
    res.json({ token, user });
  });

  // Payaza Payment Endpoint
  app.post('/api/payment/payaza/initialize', async (req, res) => {
    const { userId, amount, currency } = req.body;
    
    try {
      const payazaApiKey = process.env.PAYAZA_API_KEY;
      
      if (!payazaApiKey) {
        throw new Error('PAYAZA_API_KEY is not configured in the environment variables.');
      }

      // Real Payaza API Integration
      // Using standard Payaza charge endpoint
      const response = await fetch('https://api.payaza.africa/live/merchant-api/v1/payment/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Payaza ${payazaApiKey}`
        },
        body: JSON.stringify({
          service_type: "Account",
          service_payload: {
            request_application: "Payaza",
            application_module: "USER_MODULE",
            application_version: "1.0.0",
            request_class: "MerchantCreatePaymentRequest",
            connection_map: "1",
            transaction_amount: amount,
            transaction_currency: currency,
            transaction_reference: `UPFRICA_${Date.now()}_${userId}`,
            customer_first_name: "UpFrica",
            customer_last_name: "User",
            customer_email: `${userId}@upfrica.com`,
            customer_phone: "0000000000",
            checkout_url: `${req.protocol}://${req.get('host')}/payment?status=success&userId=${userId}`
          }
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to initialize Payaza payment');
      }

      // Payaza typically returns a checkout URL in the response
      const checkoutUrl = data?.response_content?.checkout_url || data?.checkout_url;
      
      if (checkoutUrl) {
        res.json({ success: true, checkoutUrl });
      } else {
        throw new Error('Payment initialized but no checkout URL was returned by Payaza');
      }
    } catch (error: any) {
      console.error('Payaza Error:', error);
      res.status(400).json({ error: error.message || 'Payment processing failed' });
    }
  });

  app.post('/api/payment/success', (req, res) => {
    const { userId } = req.body;
    const user = users.find(u => u.id === userId);
    if (user) {
      user.hasActiveSubscription = true;
      saveUsers();
      res.json({ success: true, user });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
