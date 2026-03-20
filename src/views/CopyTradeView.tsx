import React, { useState } from 'react';
import { User } from '../types';
import { TrendingUp, AlertTriangle, Users, Activity, ArrowUpRight, ArrowDownRight, Copy, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface CopyTradeViewProps {
  user: User | null;
}

export function CopyTradeView({ user }: CopyTradeViewProps) {
  const [copiedTraders, setCopiedTraders] = useState<string[]>(['trader_1']);

  const toggleCopy = (traderId: string) => {
    if (copiedTraders.includes(traderId)) {
      setCopiedTraders(copiedTraders.filter(id => id !== traderId));
    } else {
      setCopiedTraders([...copiedTraders, traderId]);
    }
  };

  const topTraders = [
    { id: 'trader_1', name: 'CryptoWhale_99', roi: '+145.2%', followers: 12450, winRate: '78%', risk: 'High' },
    { id: 'trader_2', name: 'SteadyGains_ETH', roi: '+42.8%', followers: 8320, winRate: '92%', risk: 'Low' },
    { id: 'trader_3', name: 'AlgoBot_Alpha', roi: '+89.4%', followers: 5100, winRate: '65%', risk: 'Medium' },
    { id: 'trader_4', name: 'DeFi_Sniper', roi: '+210.1%', followers: 19800, winRate: '54%', risk: 'Extreme' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-100 tracking-tight flex items-center gap-3">
          <TrendingUp className="text-indigo-400" size={32} />
          Upfrica CopyTrade
        </h1>
        <p className="text-slate-400 mt-1">Automatically copy top-performing crypto traders via Pionex integration. Powered by Oskayio Consults.</p>
      </div>

      <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-6 flex items-start gap-4">
        <AlertTriangle className="text-rose-400 shrink-0 mt-1" size={24} />
        <div>
          <h3 className="text-lg font-bold text-rose-400">Risk Warning</h3>
          <p className="text-rose-500/80 mt-1">Cryptocurrency trading involves significant risk and can result in the loss of your invested capital. Past performance of top traders is not indicative of future results. Only invest what you can afford to lose.</p>
        </div>
      </div>

      {user?.kycStatus !== 'verified' && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 flex items-start gap-4">
          <ShieldAlert className="text-amber-400 shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-lg font-bold text-amber-400">KYC Verification Required</h3>
            <p className="text-amber-500/80 mt-1">You must complete Identity Verification (KYC) to enable automated trading and connect to the Pionex API.</p>
            <button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Verify Identity
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <Activity size={20} className="text-indigo-400" />
            <span className="font-medium">Total Profit/Loss</span>
          </div>
          <div className="text-4xl font-bold text-emerald-400 tracking-tight">+$1,240.50</div>
          <div className="mt-4 flex items-center gap-2 text-sm text-emerald-400 font-medium">
            <ArrowUpRight size={16} />
            <span>+12.4% All Time</span>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <Users size={20} className="text-blue-400" />
            <span className="font-medium">Active Copies</span>
          </div>
          <div className="text-4xl font-bold text-slate-100 tracking-tight">{copiedTraders.length}</div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>Traders currently followed</span>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <Copy size={20} className="text-purple-400" />
            <span className="font-medium">Total Copied Trades</span>
          </div>
          <div className="text-4xl font-bold text-slate-100 tracking-tight">142</div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>Executed via Pionex</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-100">Performance Leaderboard</h2>
            <span className="text-xs font-medium bg-slate-800 text-slate-400 px-2 py-1 rounded-md">30 Days</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-sm text-slate-400">
                  <th className="p-4 font-medium">Trader</th>
                  <th className="p-4 font-medium">ROI</th>
                  <th className="p-4 font-medium">Win Rate</th>
                  <th className="p-4 font-medium">Followers</th>
                  <th className="p-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {topTraders.map((trader) => {
                  const isCopied = copiedTraders.includes(trader.id);
                  return (
                    <tr key={trader.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs">
                            {trader.name.substring(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-medium text-slate-200">{trader.name}</div>
                            <div className="text-xs text-slate-500">Risk: {trader.risk}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-bold text-emerald-400">{trader.roi}</td>
                      <td className="p-4 text-slate-300">{trader.winRate}</td>
                      <td className="p-4 text-slate-300">{trader.followers.toLocaleString()}</td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => toggleCopy(trader.id)}
                          disabled={user?.kycStatus !== 'verified'}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed ${
                            isCopied 
                              ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
                              : 'bg-indigo-600 text-white hover:bg-indigo-700'
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <CheckCircle2 size={16} />
                              Following
                            </>
                          ) : (
                            <>
                              <Copy size={16} />
                              Copy
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-lg font-bold text-slate-100">Recent Copied Trades</h2>
          </div>
          <div className="divide-y divide-slate-800">
            {[1, 2, 3, 4, 5].map((i) => {
              const isProfit = Math.random() > 0.3;
              return (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isProfit ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                      {isProfit ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    </div>
                    <div>
                      <p className="font-medium text-slate-200 text-sm">{i % 2 === 0 ? 'BTC/USDT' : 'ETH/USDT'} <span className="text-slate-500 text-xs ml-1">Long</span></p>
                      <p className="text-xs text-slate-500">via CryptoWhale_99</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold text-sm ${isProfit ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {isProfit ? '+' : '-'}${(Math.random() * 50).toFixed(2)}
                    </div>
                    <div className="text-xs text-slate-500">
                      Today, 10:4{i} AM
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
