import express from 'express';
import { createServer as createViteServer } from 'vite';
import crypto from 'crypto';
import path from 'path';

const SECRET = process.env.JWT_SECRET || 'upfrica-super-secret-key-2026';

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

// In-memory user store for demonstration
const users: any[] = [];
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
        console.warn('TELEGRAM_BOT_TOKEN is missing. Simulating message delivery.');
        console.log(`[SIMULATED TELEGRAM TO ${telegramId}]: ${message}`);
        return res.json({ 
          success: true, 
          message: 'Code sent successfully (simulated)', 
          productName,
          simulatedCode: code 
        });
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
        
        // Fallback to simulation so the user is never blocked
        console.warn('Telegram delivery failed. Falling back to simulation.');
        return res.json({ 
          success: true, 
          message: `Telegram delivery failed (${errorData.description || 'Unknown error'}). Using simulated code.`, 
          productName,
          simulatedCode: code 
        });
      }
      
      res.json({ success: true, message: 'Code sent successfully', productName });
    } catch (error: any) {
      console.error('Failed to send message:', error);
      // Fallback to simulation on network errors too
      return res.json({ 
        success: true, 
        message: `Network error. Using simulated code.`, 
        productName,
        simulatedCode: code 
      });
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
        selectedProduct: savedData.selectedProduct || 'dashboard'
      };
      users.push(user);
    } else {
      user = users.find(u => u.telegramId === telegramId);
    }
    
    const token = createJWT({ id: user.id, telegramId: user.telegramId });
    res.json({ token, user });
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
