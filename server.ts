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
const verificationCodes = new Map<string, { code: string; mode: string; authMethod: string; selectedProduct?: string }>();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/auth/request-code', (req, res) => {
    const { phoneNumber, authMethod, mode, selectedProduct } = req.body;
    
    if (mode === 'signup' && users.find(u => u.phoneNumber === phoneNumber)) {
      return res.status(400).json({ error: 'User already exists' });
    }
    if (mode === 'login' && !users.find(u => u.phoneNumber === phoneNumber)) {
      return res.status(404).json({ error: 'User not found. Please sign up.' });
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    verificationCodes.set(phoneNumber, { code, mode, authMethod, selectedProduct });
    
    let productName = 'UpFrica';
    if (mode === 'signup' && selectedProduct) {
      productName = selectedProduct.charAt(0).toUpperCase() + selectedProduct.slice(1);
    } else if (mode === 'login') {
      const user = users.find(u => u.phoneNumber === phoneNumber);
      if (user && user.selectedProduct) {
        productName = user.selectedProduct.charAt(0).toUpperCase() + user.selectedProduct.slice(1);
      }
    }

    const message = `Your ${productName} verification code is: ${code}`;
    
    // In a real app, send via WhatsApp/Telegram API here.
    res.json({ success: true, code, message, productName });
  });

  app.post('/api/auth/verify-code', (req, res) => {
    const { phoneNumber, code } = req.body;
    
    const savedData = verificationCodes.get(phoneNumber);
    if (!savedData || savedData.code !== code) {
      return res.status(400).json({ error: 'Invalid or expired verification code' });
    }
    
    verificationCodes.delete(phoneNumber);
    
    let user;
    if (savedData.mode === 'signup') {
      user = {
        id: 'usr_' + Math.random().toString(36).substr(2, 9),
        phoneNumber,
        authMethod: savedData.authMethod,
        name: 'User ' + phoneNumber.slice(-4),
        kycStatus: 'unverified',
        walletBalance: 0,
        usdcBalance: 0,
        selectedProduct: savedData.selectedProduct || 'dashboard'
      };
      users.push(user);
    } else {
      user = users.find(u => u.phoneNumber === phoneNumber);
    }
    
    const token = createJWT({ id: user.id, phoneNumber: user.phoneNumber });
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
