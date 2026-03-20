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

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/auth/signup', (req, res) => {
    const { email, password, name, selectedProduct } = req.body;
    
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      email,
      password, // In a real app, hash this!
      name: name || email.split('@')[0],
      kycStatus: 'unverified',
      walletBalance: 0,
      usdcBalance: 0,
      selectedProduct: selectedProduct || 'dashboard'
    };

    users.push(newUser);

    const token = createJWT({ id: newUser.id, email: newUser.email });
    
    // Remove password before sending to client
    const { password: _, ...userWithoutPassword } = newUser;
    
    res.json({ token, user: userWithoutPassword });
  });

  app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = createJWT({ id: user.id, email: user.email });
    
    const { password: _, ...userWithoutPassword } = user;
    res.json({ token, user: userWithoutPassword });
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
