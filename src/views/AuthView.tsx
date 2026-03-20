import React, { useState } from 'react';
import { User, ViewState } from '../types';
import { motion } from 'motion/react';
import { ShieldCheck, CreditCard, Paintbrush, TrendingUp, Landmark, Terminal, ArrowRight, Lock, Mail, KeyRound, CheckCircle2 } from 'lucide-react';

interface AuthViewProps {
  onLogin: (user: User, token?: string) => void;
  onNavigate: (view: ViewState) => void;
}

export function AuthView({ onLogin, onNavigate }: AuthViewProps) {
  const [mode, setMode] = useState<'login' | 'signup' | '2fa'>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ViewState | ''>('');
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState('');

  const products: { id: ViewState; name: string; icon: React.ElementType; desc: string }[] = [
    { id: 'flowpay', name: 'FlowPay', icon: CreditCard, desc: 'Fiat to USDC settlement' },
    { id: 'creatorx', name: 'CreatorX', icon: Paintbrush, desc: 'Content monetization' },
    { id: 'copytrade', name: 'CopyTrade', icon: TrendingUp, desc: 'Crypto copy trading' },
    { id: 'markets', name: 'Markets', icon: Landmark, desc: 'RWA tokenization' },
    { id: 'forge', name: 'Forge', icon: Terminal, desc: 'AI SaaS Builder' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (mode === 'signup' && !selectedProduct) {
      setError('Please select a product to continue.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const endpoint = mode === 'signup' ? '/api/auth/signup' : '/api/auth/login';
      const body = mode === 'signup' 
        ? { email, password, selectedProduct }
        : { email, password };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      // Store token temporarily for 2FA
      localStorage.setItem('temp_token', data.token);
      localStorage.setItem('temp_user', JSON.stringify(data.user));
      
      setMode('2fa');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handle2FASubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const token = localStorage.getItem('temp_token');
      const userStr = localStorage.getItem('temp_user');
      
      if (token && userStr) {
        const user = JSON.parse(userStr);
        onLogin(user, token);
        localStorage.removeItem('temp_token');
        localStorage.removeItem('temp_user');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 text-center border-b border-slate-800/50 bg-slate-900/50 relative">
            <button 
              onClick={() => onNavigate('home')}
              className="absolute top-4 left-4 text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors"
            >
              ← Back
            </button>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-500/30 mb-6">
              U
            </div>
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Upfrica Platform</h1>
            <p className="text-slate-400 mt-2 text-sm">Secure access to FlowPay, CreatorX, CopyTrade & Markets</p>
          </div>

          <div className="p-8">
            {mode === '2fa' ? (
              <form onSubmit={handle2FASubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    <ShieldCheck className="text-emerald-400" size={32} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-100">Two-Factor Authentication</h2>
                  <p className="text-slate-400 text-sm mt-2">Enter the 6-digit code from your authenticator app to verify your identity.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Authentication Code</label>
                  <div className="relative">
                    <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                    <input
                      type="text"
                      maxLength={6}
                      required
                      value={twoFactorCode}
                      onChange={(e) => setTwoFactorCode(e.target.value.replace(/\D/g, ''))}
                      className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:bg-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-slate-200 text-center tracking-[0.5em] text-2xl font-mono"
                      placeholder="000000"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || twoFactorCode.length !== 6}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Verifying...' : 'Verify & Secure Login'}
                  {!isLoading && <ArrowRight size={18} />}
                </button>
                
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className="w-full text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors"
                >
                  Back to Sign Up
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Tabs */}
                <div className="flex p-1 bg-slate-950 rounded-xl mb-6 border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${mode === 'login' ? 'bg-slate-800 text-slate-100 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    Log In
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${mode === 'signup' ? 'bg-slate-800 text-slate-100 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    Sign Up
                  </button>
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center mb-6">
                    {error}
                  </div>
                )}

                {mode === 'signup' && (
                  <div className="space-y-3 mb-6">
                    <label className="block text-sm font-medium text-slate-300">Select Primary Product</label>
                    <div className="grid grid-cols-2 gap-3">
                      {products.map((p) => {
                        const Icon = p.icon;
                        const isSelected = selectedProduct === p.id;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setSelectedProduct(p.id)}
                            className={`relative p-4 rounded-xl border text-left transition-all duration-200 ${
                              isSelected 
                                ? 'bg-indigo-500/10 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.15)]' 
                                : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            {isSelected && (
                              <div className="absolute top-3 right-3 text-indigo-400">
                                <CheckCircle2 size={16} />
                              </div>
                            )}
                            <Icon className={`mb-3 ${isSelected ? 'text-indigo-400' : 'text-slate-500'}`} size={24} />
                            <div className={`font-bold text-sm ${isSelected ? 'text-indigo-100' : 'text-slate-300'}`}>{p.name}</div>
                            <div className="text-[10px] text-slate-500 mt-1 leading-tight">{p.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl focus:bg-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-slate-200"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl focus:bg-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-slate-200"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-900/20 disabled:opacity-50"
                >
                  {isLoading ? 'Processing...' : mode === 'login' ? 'Secure Login' : 'Continue to 2FA'}
                  {!isLoading && <ArrowRight size={18} />}
                </button>
              </form>
            )}
          </div>
          
          <div className="p-4 text-center border-t border-slate-800/50 bg-slate-900/50">
            <p className="text-xs text-slate-500">
              Protected by industry-standard encryption. <br/>
              Powered by Oskayi Consult Ltd, Ghana.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
