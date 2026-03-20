import React from 'react';
import { User } from '../types';
import { Paintbrush, Link as LinkIcon, Image as ImageIcon, Users, DollarSign, Plus } from 'lucide-react';

interface CreatorXViewProps {
  user: User | null;
}

export function CreatorXView({ user }: CreatorXViewProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-100 tracking-tight flex items-center gap-3">
          <Paintbrush className="text-indigo-400" size={32} />
          CreatorX
        </h1>
        <p className="text-slate-400 mt-1">Creator profiles, payment links, NFT minting, and fan management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <Users size={20} className="text-indigo-400" />
            <span className="font-medium">Total Fans</span>
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
            <LinkIcon size={20} className="text-amber-400" />
            <span className="font-medium">Active Links</span>
          </div>
          <div className="text-4xl font-bold text-slate-100 tracking-tight">4</div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>Paystack Payment Links</span>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <ImageIcon size={20} className="text-purple-400" />
            <span className="font-medium">NFTs Minted</span>
          </div>
          <div className="text-4xl font-bold text-slate-100 tracking-tight">12</div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>via thirdweb</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-100">Payment Links</h2>
            <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300 flex items-center gap-1">
              <Plus size={16} /> New Link
            </button>
          </div>
          <div className="p-6 space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400">
                    <LinkIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-200">Exclusive Content Access #{i}</h3>
                    <p className="text-sm text-slate-500">paystack.com/pay/creatorx-{i}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-200">$50.00</div>
                  <div className="text-xs text-slate-500">12 sales</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-100">NFT Collection</h2>
            <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300 flex items-center gap-1">
              <Plus size={16} /> Mint New
            </button>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-slate-800 rounded-xl overflow-hidden group cursor-pointer">
                <div className="h-32 bg-slate-950 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                  <ImageIcon size={32} className="text-slate-600" />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-slate-200 text-sm">Digital Art #{i}</h3>
                  <p className="text-xs text-slate-500 mt-1">Minted on Polygon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
