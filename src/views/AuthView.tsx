import React, { useState, useEffect } from 'react';
import { User, ViewState } from '../types';
import { motion } from 'motion/react';
import { ShieldCheck, CreditCard, Paintbrush, TrendingUp, Landmark, Terminal, ArrowRight, Phone, CheckCircle2, Coins, MessageCircle } from 'lucide-react';

interface AuthViewProps {
  onLogin: (user: User, token?: string) => void;
  onNavigate: (view: ViewState) => void;
}

export function AuthView({ onLogin, onNavigate }: AuthViewProps) {
  const [mode, setMode] = useState<'login' | 'signup' | 'verify'>('signup');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [authMethod, setAuthMethod] = useState<'whatsapp' | 'telegram'>('whatsapp');
  const [selectedProduct, setSelectedProduct] = useState<ViewState | ''>('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const products: { id: ViewState; name: string; icon: React.ElementType; desc: string }[] = [
    { id: 'flowpay', name: 'FlowPay', icon: CreditCard, desc: 'Fiat to USDC settlement' },
    { id: 'creatorx', name: 'CreatorX', icon: Paintbrush, desc: 'Content monetization' },
    { id: 'copytrade', name: 'CopyTrade', icon: TrendingUp, desc: 'Crypto copy trading' },
    { id: 'markets', name: 'Markets', icon: Landmark, desc: 'RWA tokenization' },
    { id: 'forge', name: 'Forge', icon: Terminal, desc: 'AI SaaS Builder' },
    { id: 'lendx', name: 'LendX', icon: Coins, desc: 'DeFi Loans & Liquidity' },
  ];

  useEffect(() => {
    const storedProduct = localStorage.getItem('selectedProduct');
    if (storedProduct) {
      setSelectedProduct(storedProduct as ViewState);
      setMode('signup');
      localStorage.removeItem('selectedProduct');
    }
  }, []);

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    
    if (mode === 'signup' && !selectedProduct) {
      setError('Please select a primary product to continue.');
      return;
    }
    
    if (!phoneNumber || phoneNumber.length < 8) {
      setError('Please enter a valid phone number.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/auth/request-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          phoneNumber, 
          authMethod, 
          mode, 
          selectedProduct 
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to request code');
      }

      setSuccessMessage(`Code sent to your ${authMethod === 'whatsapp' ? 'WhatsApp' : 'Telegram'}!`);
      setMode('verify');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/auth/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, code: verificationCode })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Verification failed');
      }

      onLogin(data.user, data.token);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
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
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight">UpFrica Platform</h1>
            <p className="text-slate-400 mt-2 text-sm">Secure access to FlowPay, CreatorX, CopyTrade & Markets</p>
          </div>

          <div className="p-8">
            {mode === 'verify' ? (
              <form onSubmit={handleVerifyCode} className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    <ShieldCheck className="text-emerald-400" size={32} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-100">Verify Your Number</h2>
                  <p className="text-slate-400 text-sm mt-2">
                    Enter the 6-digit code sent to your {authMethod === 'whatsapp' ? 'WhatsApp' : 'Telegram'} at {phoneNumber}
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center mb-6">
                    {error}
                  </div>
                )}
                
                {successMessage && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm text-center mb-6">
                    {successMessage}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Verification Code</label>
                  <div className="relative">
                    <input
                      type="text"
                      maxLength={6}
                      required
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-4 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:bg-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-slate-200 text-center tracking-[0.5em] text-2xl font-mono"
                      placeholder="000000"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || verificationCode.length !== 6}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Verifying...' : 'Verify & Login'}
                  {!isLoading && <ArrowRight size={18} />}
                </button>
                
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className="w-full text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors"
                >
                  Change phone number or method
                </button>
              </form>
            ) : (
              <form onSubmit={handleRequestCode} className="space-y-6">
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
                    <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl focus:bg-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-slate-200"
                        placeholder="+1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Receive Code Via</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setAuthMethod('whatsapp')}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                          authMethod === 'whatsapp' 
                            ? 'bg-[#25D366]/10 border-[#25D366] text-[#25D366]' 
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <MessageCircle size={18} />
                        <span className="font-medium text-sm">WhatsApp</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setAuthMethod('telegram')}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                          authMethod === 'telegram' 
                            ? 'bg-[#0088cc]/10 border-[#0088cc] text-[#0088cc]' 
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.9333 3.65556C21.9333 3.65556 23.5333 3.05556 23.4 4.52222C23.3333 5.18889 22.8 8.65556 22.3333 12.3889L20.6667 20.9222C20.6667 20.9222 20.5333 22.1222 19.4667 22.3889C18.4 22.6556 16.6667 21.4556 16.4 21.1889C16.1333 20.9889 11.4 17.9222 9.66667 16.3889C9.2 15.9889 8.66667 15.1889 9.73333 14.2556L15.6667 8.52222C16.3333 7.85556 17 6.12222 14.0667 8.12222L6.13333 13.5222C6.13333 13.5222 5.13333 14.1222 3.26667 13.5889L-0.600002 12.3889C-0.600002 12.3889 -2.06667 11.4556 0.866665 10.3889C7.13333 7.65556 14.8 4.52222 21.9333 3.65556Z" fill="currentColor"/>
                        </svg>
                        <span className="font-medium text-sm">Telegram</span>
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-900/20 disabled:opacity-50"
                >
                  {isLoading ? 'Sending Code...' : `Get Code via ${authMethod === 'whatsapp' ? 'WhatsApp' : 'Telegram'}`}
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
