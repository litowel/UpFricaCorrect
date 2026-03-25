import React, { useState, useEffect } from 'react';
import { User, ViewState } from '../types';
import { motion } from 'motion/react';
import { ShieldCheck, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';

interface PaymentViewProps {
  user: User;
  onSuccess: () => void;
  onLogout: () => void;
}

export function PaymentView({ user, onSuccess, onLogout }: PaymentViewProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') === 'success' && urlParams.get('userId') === user.id) {
      setIsLoading(true);
      fetch('/api/payment/success', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('upfrica_token')}`
        },
        body: JSON.stringify({ userId: user.id })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);
          onSuccess();
        } else {
          setError('Failed to verify payment. Please contact support.');
          setIsLoading(false);
        }
      })
      .catch(err => {
        setError('Failed to verify payment. Please contact support.');
        setIsLoading(false);
      });
    }
  }, [user.id, onSuccess]);

  const handlePayment = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/payment/payaza/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('upfrica_token')}`
        },
        body: JSON.stringify({
          userId: user.id,
          amount: 99.99,
          currency: 'USD'
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to initialize payment');
      }

      // If Payaza returns a checkout URL, we would redirect:
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        onSuccess();
      }
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden font-sans">
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
              onClick={onLogout}
              className="absolute top-4 left-4 text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors"
            >
              ← Logout
            </button>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mx-auto flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-500/30">
              <CreditCard size={32} />
            </div>
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Activate Your Access</h1>
            <p className="text-slate-400 mt-2 text-sm">Subscribe to unlock the full UpFrica platform</p>
          </div>

          <div className="p-8">
            <div className="bg-slate-950 border border-indigo-500/30 rounded-2xl p-6 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Pro Plan
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-white">$99.99 USD</span>
                <span className="text-slate-400 font-medium">/ month</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {[
                  `Full access to ${user.selectedProduct ? user.selectedProduct.charAt(0).toUpperCase() + user.selectedProduct.slice(1) : 'all products'}`,
                  'Unlimited transactions & API access',
                  'Priority 24/7 support',
                  '30-day money-back guarantee'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center mb-6">
                {error}
              </div>
            )}

            <button
              onClick={handlePayment}
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-900/20 disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Pay with Payaza'}
              {!isLoading && <ArrowRight size={18} />}
            </button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>Secure payment processing by Payaza</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
