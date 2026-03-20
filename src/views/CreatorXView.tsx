import React, { useState } from 'react';
import { User } from '../types';
import { Paintbrush, Link as LinkIcon, Image as ImageIcon, Users, DollarSign, Plus, Shield, Globe2, Zap, CheckCircle2, CreditCard, Lock } from 'lucide-react';

interface CreatorXViewProps {
  user: User | null;
}

export function CreatorXView({ user }: CreatorXViewProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'subscriptions' | 'token-gated' | 'payments'>('dashboard');

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero / Intro Section for CreatorX */}
      <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/20 border border-purple-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
              <Paintbrush size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">CreatorX Platform</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div>
              <h2 className="text-xl font-bold text-red-400 mb-3 flex items-center gap-2">
                <Shield size={20} /> The Problem
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Creators struggle to monetize globally. Traditional platforms take huge cuts, restrict payouts by geography, and own your audience data.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                <Globe2 size={20} /> The Solution & Benefits
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Earn globally</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Subscription income</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Tokenized access</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> No middlemen</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Fan engagement</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Crypto payout</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Flexible pricing</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Global audience</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Ownership of content</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Recurring revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2 border-b border-slate-800 pb-px overflow-x-auto custom-scrollbar">
        {[
          { id: 'dashboard', label: 'Creator Dashboard' },
          { id: 'subscriptions', label: 'Subscriptions' },
          { id: 'token-gated', label: 'Token-Gated Content' },
          { id: 'payments', label: 'Payment Integrations' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-3 text-sm font-medium rounded-t-xl transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-slate-900 border-t border-x border-slate-800 text-purple-400'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center gap-3 text-slate-400 mb-4">
                  <Users size={20} className="text-purple-400" />
                  <span className="font-medium">Total Subscribers</span>
                </div>
                <div className="text-4xl font-bold text-slate-100 tracking-tight">1,248</div>
                <div className="mt-4 flex items-center gap-2 text-sm text-emerald-400 font-medium">
                  <span>+12 this week</span>
                </div>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center gap-3 text-slate-400 mb-4">
                  <DollarSign size={20} className="text-emerald-400" />
                  <span className="font-medium">Revenue (30d)</span>
                </div>
                <div className="text-4xl font-bold text-slate-100 tracking-tight">$4,500</div>
                <div className="mt-4 flex items-center gap-2 text-sm text-emerald-400 font-medium">
                  <span>+15% vs last month</span>
                </div>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center gap-3 text-slate-400 mb-4">
                  <Lock size={20} className="text-amber-400" />
                  <span className="font-medium">Gated Posts</span>
                </div>
                <div className="text-4xl font-bold text-slate-100 tracking-tight">24</div>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <span>Powered by Thirdweb</span>
                </div>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center gap-3 text-slate-400 mb-4">
                  <CreditCard size={20} className="text-blue-400" />
                  <span className="font-medium">Active Gateways</span>
                </div>
                <div className="text-4xl font-bold text-slate-100 tracking-tight">2</div>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <span>Payaza & Paystack</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
              <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-100">Recent Transactions</h2>
              </div>
              <div className="p-0">
                <table className="w-full text-left text-sm text-slate-400">
                  <thead className="bg-slate-950/50 text-xs uppercase font-medium text-slate-500">
                    <tr>
                      <th className="px-6 py-4">Fan</th>
                      <th className="px-6 py-4">Type</th>
                      <th className="px-6 py-4">Amount</th>
                      <th className="px-6 py-4">Gateway</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    <tr className="hover:bg-slate-800/20 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-200">alex@example.com</td>
                      <td className="px-6 py-4">Monthly Subscription</td>
                      <td className="px-6 py-4 text-emerald-400 font-medium">$15.00</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">Payaza</span></td>
                      <td className="px-6 py-4"><span className="text-emerald-400">Completed</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/20 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-200">sarah.eth</td>
                      <td className="px-6 py-4">NFT Access Pass</td>
                      <td className="px-6 py-4 text-emerald-400 font-medium">50 USDC</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs">Crypto</span></td>
                      <td className="px-6 py-4"><span className="text-emerald-400">Completed</span></td>
                    </tr>
                    <tr className="hover:bg-slate-800/20 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-200">mike99@mail.com</td>
                      <td className="px-6 py-4">Annual Subscription</td>
                      <td className="px-6 py-4 text-emerald-400 font-medium">$150.00</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 bg-teal-500/10 text-teal-400 rounded text-xs">Paystack</span></td>
                      <td className="px-6 py-4"><span className="text-emerald-400">Completed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'subscriptions' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Subscription Tiers</h2>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-all flex items-center gap-2">
                <Plus size={18} /> Create Tier
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Supporter', price: '$5/mo', fans: 850, perks: ['Early access to videos', 'Supporter badge'] },
                { name: 'Insider', price: '$15/mo', fans: 320, perks: ['Exclusive behind the scenes', 'Monthly Q&A stream', 'Discord access'] },
                { name: 'VIP', price: '$50/mo', fans: 78, perks: ['1-on-1 monthly call', 'Merch discounts', 'Producer credit'] },
              ].map((tier, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-colors">
                  <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                  <div className="text-2xl font-bold text-purple-400 mb-4">{tier.price}</div>
                  <div className="text-sm text-slate-400 mb-6">{tier.fans} active subscribers</div>
                  <div className="space-y-2 mb-6">
                    {tier.perks.map((perk, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={14} className="text-purple-500" /> {perk}
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors">
                    Edit Tier
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'token-gated' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Token-Gated Content</h2>
                <p className="text-sm text-slate-400 mt-1">Powered by Thirdweb smart contracts</p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all flex items-center gap-2">
                <Plus size={18} /> New Gated Post
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex gap-6">
                  <div className="w-32 h-32 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 shrink-0">
                    <Lock size={32} className="text-slate-600" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-medium rounded">NFT Required</span>
                        <span className="text-xs text-slate-500">Published 2d ago</span>
                      </div>
                      <h3 className="font-bold text-white text-lg leading-tight mb-2">Exclusive Masterclass Part {i}</h3>
                      <p className="text-sm text-slate-400 line-clamp-2">Learn the advanced techniques I use for production. This content is exclusively available to holders of the CreatorX Genesis Pass.</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <button className="text-sm text-slate-300 hover:text-white font-medium">Edit</button>
                      <button className="text-sm text-slate-300 hover:text-white font-medium">View Analytics</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-white mb-6">Payment Integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Payaza - Main */}
              <div className="bg-slate-900 border-2 border-blue-500/30 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider">
                  Main Gateway
                </div>
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-blue-600 font-bold text-xl">Payaza</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Payaza Integration</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Your primary payment processor for global and local African payments. Supports cards, mobile money, and bank transfers.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Status</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1"><CheckCircle2 size={14}/> Connected</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Processing Fee</span>
                    <span className="text-white font-medium">1.5% + $0.10</span>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-medium transition-colors">
                  Manage Settings
                </button>
              </div>

              {/* Paystack - Supporting */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative">
                <div className="absolute top-4 right-4 px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold rounded-full uppercase tracking-wider">
                  Supporting
                </div>
                <div className="w-16 h-16 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-teal-400 font-bold text-xl">Paystack</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Paystack Integration</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Complementary payment gateway for specific regional coverage and fallback processing.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Status</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1"><CheckCircle2 size={14}/> Connected</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Processing Fee</span>
                    <span className="text-white font-medium">1.5% + NGN 100</span>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-medium transition-colors">
                  Manage Settings
                </button>
              </div>

              {/* Thirdweb - Web3 */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:col-span-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <span className="text-purple-400 font-bold text-xl">thirdweb</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Thirdweb Smart Contracts</h3>
                      <p className="text-slate-400 text-sm">Web3 infrastructure for NFTs and token-gated access.</p>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-medium flex items-center gap-1 text-sm bg-emerald-500/10 px-3 py-1 rounded-full"><CheckCircle2 size={14}/> Connected</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <div className="text-sm text-slate-400 mb-1">Active Contracts</div>
                    <div className="text-xl font-bold text-white">3</div>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <div className="text-sm text-slate-400 mb-1">Network</div>
                    <div className="text-xl font-bold text-white">Polygon (PoS)</div>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <div className="text-sm text-slate-400 mb-1">Total Minted</div>
                    <div className="text-xl font-bold text-white">1,420 NFTs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
