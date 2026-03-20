import React, { useState } from 'react';
import { User } from '../types';
import { Coins, ArrowRight, Activity, Zap, Shield, ChevronRight, RefreshCw } from 'lucide-react';

interface LendXViewProps {
  user: User;
}

export function LendXView({ user }: LendXViewProps) {
  const [amount, setAmount] = useState('');
  const [collateral, setCollateral] = useState('');

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">LendX</h1>
          <p className="text-slate-400 mt-1">Instant crypto loans & liquidity access powered by Aave.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-xl font-medium hover:bg-cyan-500/20 transition-colors flex items-center gap-2">
            <Zap size={18} />
            Flash Loan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Main Action Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Borrow USDC</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Deposit Collateral (ETH)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={collateral}
                    onChange={(e) => setCollateral(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                    placeholder="0.00"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">ETH</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                  <ArrowRight size={16} className="rotate-90" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Borrow Amount (USDC)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                    placeholder="0.00"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">USDC</div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Max LTV: 50% • Interest Rate: 3.2% APY</p>
              </div>

              <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-2">
                Execute Loan <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Flash Loans Section */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Zap size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Flash Loans</h2>
                <p className="text-sm text-slate-400">Borrow → use → repay instantly</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Access uncollateralized liquidity for arbitrage and liquidation opportunities within a single transaction block. 1%–3% fee per loan.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 rounded-xl border border-slate-800 bg-slate-950 hover:border-purple-500/50 transition-colors text-left group">
                <div className="text-purple-400 mb-2"><RefreshCw size={20} /></div>
                <div className="font-medium text-white mb-1">Arbitrage</div>
                <div className="text-xs text-slate-500">Exploit price differences</div>
              </button>
              <button className="p-4 rounded-xl border border-slate-800 bg-slate-950 hover:border-purple-500/50 transition-colors text-left group">
                <div className="text-purple-400 mb-2"><Activity size={20} /></div>
                <div className="font-medium text-white mb-1">Liquidation</div>
                <div className="text-xs text-slate-500">Liquidate undercollateralized</div>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Stats */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-4">Your Positions</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Supplied</span>
                  <span className="text-white font-medium">$0.00</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-0"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Borrowed</span>
                  <span className="text-white font-medium">$0.00</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-0"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl p-6">
            <h3 className="font-medium text-cyan-400 mb-2 flex items-center gap-2">
              <Shield size={16} /> How LendX Works
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="text-cyan-500">1.</span>
                <span>User deposits crypto as collateral</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-500">2.</span>
                <span>System routes liquidity to Aave</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-500">3.</span>
                <span>User borrows up to 50% LTV instantly</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-500">4.</span>
                <span>Manage positions directly from dashboard</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
