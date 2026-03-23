import React from 'react';
import { User } from '../types';
import { Wallet, ArrowUpRight, ArrowDownLeft, Activity, Bell } from 'lucide-react';

interface DashboardViewProps {
  user: User | null;
}

export function DashboardView({ user }: DashboardViewProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-100 tracking-tight">Overview</h1>
        <p className="text-slate-400 mt-1">Welcome back, {user?.name}. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <Wallet size={20} className="text-indigo-400" />
            <span className="font-medium">Total Wallet Balance</span>
          </div>
          <div className="text-4xl font-bold text-slate-100 tracking-tight">
            ${(user?.walletBalance || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>No recent activity</span>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">USDC</div>
            <span className="font-medium">USDC Balance</span>
          </div>
          <div className="text-4xl font-bold text-slate-100 tracking-tight">
            ${(user?.usdcBalance || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>Stablecoin Reserve</span>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <Activity size={20} className="text-rose-400" />
            <span className="font-medium">KYC Status</span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
              user?.kycStatus === 'verified' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
              user?.kycStatus === 'pending' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
              'bg-slate-800 text-slate-400 border border-slate-700'
            }`}>
              {user?.kycStatus || 'unverified'}
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-500">
            {user?.kycStatus === 'pending' ? 'Your documents are under review.' : 'Complete verification to unlock all features.'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-100">Recent Activity</h2>
            <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300">View All</button>
          </div>
          <div className="p-8 flex flex-col items-center justify-center text-center">
            <Activity size={48} className="text-slate-700 mb-4" />
            <p className="text-slate-400 font-medium">No recent activity</p>
            <p className="text-sm text-slate-500 mt-1">Your transactions will appear here.</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-100">Notifications</h2>
            <Bell size={20} className="text-slate-500" />
          </div>
          <div className="p-6 space-y-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500 shrink-0"></div>
              <div>
                <p className="font-medium text-slate-200">KYB Verification Required</p>
                <p className="text-sm text-slate-400 mt-1">Please upload your business registration documents to activate FlowPay merchant features.</p>
                <button className="mt-3 text-sm font-medium text-indigo-400 hover:text-indigo-300">Complete KYB &rarr;</button>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-slate-600 shrink-0"></div>
              <div>
                <p className="font-medium text-slate-200">New Login Detected</p>
                <p className="text-sm text-slate-400 mt-1">A new login was detected from Accra, Ghana (IP: 197.210.x.x).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
