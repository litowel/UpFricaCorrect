import React from 'react';
import { User } from '../types';
import { Landmark, ShieldAlert, PieChart, TrendingUp, List, CheckCircle2, Lock, Building2, ArrowUpRight } from 'lucide-react';

interface MarketsViewProps {
  user: User | null;
}

export function MarketsView({ user }: MarketsViewProps) {
  const assets = [
    { id: 'ast_1', name: 'Prime Accra Real Estate', type: 'Real Estate', apy: '12.5%', price: '$50.00', available: '4,500 Tokens' },
    { id: 'ast_2', name: 'Ghana Tech Growth Fund', type: 'Equity', apy: '18.2%', price: '$100.00', available: '1,200 Tokens' },
    { id: 'ast_3', name: 'Solar Farm Project Alpha', type: 'Infrastructure', apy: '9.8%', price: '$25.00', available: '10,000 Tokens' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-100 tracking-tight flex items-center gap-3">
          <Landmark className="text-indigo-400" size={32} />
          Upfrica Markets
        </h1>
        <p className="text-slate-400 mt-1">Tokenize and trade real-world assets (RWA). Powered by thirdweb, Escrow.com, and OpenSea. A product of Oskayi Consult Ltd, Ghana.</p>
      </div>

      {user?.kycStatus !== 'verified' && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 flex items-start gap-4">
          <ShieldAlert className="text-amber-400 shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-lg font-bold text-amber-400">Investor KYC Required</h3>
            <p className="text-amber-500/80 mt-1">You must complete Identity Verification (KYC) to comply with capital markets regulations before investing or trading tokenized assets.</p>
            <button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Verify Identity
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <PieChart size={20} className="text-indigo-400" />
            <span className="font-medium">Total Investments</span>
          </div>
          <div className="text-4xl font-bold text-slate-100 tracking-tight">$45,200.00</div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>Across 4 Tokenized Assets</span>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <TrendingUp size={20} className="text-emerald-400" />
            <span className="font-medium">Total Returns</span>
          </div>
          <div className="text-4xl font-bold text-emerald-400 tracking-tight">+$5,430.00</div>
          <div className="mt-4 flex items-center gap-2 text-sm text-emerald-400 font-medium">
            <ArrowUpRight size={16} />
            <span>+12.01% All Time</span>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <List size={20} className="text-purple-400" />
            <span className="font-medium">Active Listings</span>
          </div>
          <div className="text-4xl font-bold text-slate-100 tracking-tight">14</div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>Available on NFT Marketplace</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-100">Asset Listings</h2>
            <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300">View All on OpenSea</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-sm text-slate-400">
                  <th className="p-4 font-medium">Asset</th>
                  <th className="p-4 font-medium">Type</th>
                  <th className="p-4 font-medium">Est. APY</th>
                  <th className="p-4 font-medium">Token Price</th>
                  <th className="p-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {assets.map((asset) => (
                  <tr key={asset.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                          <Building2 size={20} />
                        </div>
                        <div>
                          <div className="font-medium text-slate-200">{asset.name}</div>
                          <div className="text-xs text-slate-500">{asset.available}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-slate-300">{asset.type}</td>
                    <td className="p-4 font-bold text-emerald-400">{asset.apy}</td>
                    <td className="p-4 text-slate-300">{asset.price}</td>
                    <td className="p-4 text-right">
                      <button
                        disabled={user?.kycStatus !== 'verified'}
                        className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Invest
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-lg font-bold text-slate-100">Escrow & Compliance</h2>
            <p className="text-xs text-slate-500 mt-1">Settlements via Escrow.com</p>
          </div>
          <div className="divide-y divide-slate-800 flex-1 overflow-y-auto max-h-[400px]">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200 text-sm">Settlement #{9000 + i}</p>
                    <p className="text-xs text-slate-500">Escrow Released</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm text-slate-200">
                    ${(Math.random() * 5000 + 1000).toFixed(2)}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 justify-end mt-1">
                    <Lock size={10} /> Verified
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
