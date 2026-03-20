import React from 'react';
import { User } from '../types';
import { CreditCard, ShieldAlert, Lock, History, CheckCircle2, ToggleRight, FileText } from 'lucide-react';

interface FlowPayViewProps {
  user: User | null;
}

export function FlowPayView({ user }: FlowPayViewProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-100 tracking-tight flex items-center gap-3">
          <CreditCard className="text-indigo-400" size={32} />
          Upfrica FlowPay
        </h1>
        <p className="text-slate-400 mt-1">Accept fiat payments via Paystack and automatically settle into USDC wallets via Circle. Secured by Safe. Powered by Oskayio Consults.</p>
      </div>

      {user?.kycStatus !== 'verified' && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 flex items-start gap-4">
          <ShieldAlert className="text-amber-400 shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-lg font-bold text-amber-400">KYB Verification Required</h3>
            <p className="text-amber-500/80 mt-1">You must complete Business Verification (KYB) to accept live payments via Paystack and enable automatic USDC settlement.</p>
            <button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Start Verification
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <CreditCard size={20} className="text-indigo-400" />
            <span className="font-medium">Total Revenue (Fiat)</span>
          </div>
          <div className="text-4xl font-bold text-slate-100 tracking-tight">₵124,500.00</div>
          <div className="mt-4 flex items-center gap-2 text-sm text-emerald-400 font-medium">
            <span>+24% this month</span>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">USDC</div>
            <span className="font-medium">Safe Wallet Balance</span>
          </div>
          <div className="text-4xl font-bold text-slate-100 tracking-tight">
            ${user?.usdcBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
            <Lock size={14} /> <span>Custody by Safe</span>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <History size={20} className="text-purple-400" />
            <span className="font-medium">Total Transactions</span>
          </div>
          <div className="text-4xl font-bold text-slate-100 tracking-tight">8,432</div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>Via Paystack Webhooks</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-100">Auto-Settlement Settings</h2>
            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/20">
              <CheckCircle2 size={16} /> Active
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-800">
              <div>
                <h3 className="font-bold text-slate-200">Auto-Convert to USDC</h3>
                <p className="text-sm text-slate-500 mt-1">Automatically convert incoming GHS to USDC via Circle API.</p>
              </div>
              <ToggleRight size={40} className="text-indigo-500" />
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <h3 className="font-bold text-slate-200 mb-2">Safe Custody Wallet</h3>
              <div className="flex items-center justify-between text-sm text-slate-400 font-mono bg-slate-900 p-3 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2">
                  <Lock size={16} className="text-slate-500" />
                  0x7a59...4b2F
                </div>
                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">Ethereum Mainnet</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Manual Conversion Rate Check</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₵</span>
                <input
                  type="number"
                  className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:bg-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-lg font-medium text-slate-200"
                  placeholder="1000.00"
                  defaultValue={1000}
                />
              </div>
              <p className="text-xs text-slate-500 mt-2 text-right">Estimated: 78.50 USDC (Rate: 1 USDC = 12.74 GHS)</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-100">Settlement & Audit Logs</h2>
            <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300">Download CSV</button>
          </div>
          <div className="divide-y divide-slate-800 flex-1 overflow-y-auto max-h-[400px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="p-4 px-6 flex items-center justify-between hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                    <FileText size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Auto-Settlement #{8000 + i}</p>
                    <p className="text-sm text-slate-500">Circle API • Today, 14:2{i} PM</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-200">
                    +${(Math.random() * 50 + 10).toFixed(2)} USDC
                  </div>
                  <div className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full inline-block mt-1">
                    Settled to Safe
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
