import React from 'react';
import { User } from '../types';
import { CreditCard, ArrowUpRight, ArrowDownLeft, Clock, Search, Filter } from 'lucide-react';

interface PaymentsViewProps {
  user: User;
}

export function PaymentsView({ user }: PaymentsViewProps) {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Payments</h1>
          <p className="text-slate-400 mt-1">Manage your transactions and payment methods.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-colors flex items-center gap-2">
            <ArrowDownLeft size={18} />
            Receive
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/20 flex items-center gap-2">
            <ArrowUpRight size={18} />
            Send Payment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Transactions */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none w-48"
                  />
                </div>
                <button className="p-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
                  <Filter size={16} />
                </button>
              </div>
            </div>
            
            <div className="divide-y divide-slate-800/50">
              {/* Empty State */}
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-500">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-medium text-white mb-1">No transactions yet</h3>
                <p className="text-slate-400 text-sm">When you make or receive payments, they will appear here.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Payment Methods */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white">Payment Methods</h2>
              <button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium">Add New</button>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 border border-slate-800 bg-slate-950 rounded-xl flex items-center gap-4">
                <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center text-slate-400">
                  <CreditCard size={20} />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white text-sm">•••• 4242</div>
                  <div className="text-xs text-slate-500">Expires 12/24</div>
                </div>
                <div className="text-xs font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded">Default</div>
              </div>
            </div>
          </div>

          {/* Quick Transfer */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Quick Transfer</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Send to</label>
                <input 
                  type="text" 
                  placeholder="Email or wallet address" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-7 pr-3 py-2 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>
              <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors">
                Send Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
