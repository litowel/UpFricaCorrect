import React from 'react';
import { LayoutDashboard, CreditCard, Paintbrush, ShieldCheck, LogOut, Wallet, TrendingUp, Landmark, Terminal, Settings, Coins } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  navigate: (view: ViewState) => void;
  logout: () => void;
}

export function Sidebar({ currentView, navigate, logout }: SidebarProps) {
  const mainItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'payments', label: 'Payments', icon: <Wallet size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  const productItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'flowpay', label: 'FlowPay', icon: <CreditCard size={20} /> },
    { id: 'creatorx', label: 'CreatorX', icon: <Paintbrush size={20} /> },
    { id: 'copytrade', label: 'CopyTrade', icon: <TrendingUp size={20} /> },
    { id: 'markets', label: 'Markets', icon: <Landmark size={20} /> },
    { id: 'forge', label: 'Forge (AI)', icon: <Terminal size={20} /> },
    { id: 'lendx', label: 'LendX', icon: <Coins size={20} /> },
  ];

  const bottomItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'kyc', label: 'KYC / KYB', icon: <ShieldCheck size={20} /> },
  ];

  const renderItem = (item: { id: ViewState; label: string; icon: React.ReactNode }) => (
    <button
      key={item.id}
      onClick={() => navigate(item.id)}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors text-sm ${
        currentView === item.id
          ? 'bg-indigo-500/10 text-indigo-400 font-medium shadow-sm border border-indigo-500/20'
          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`}
    >
      {item.icon}
      <span>{item.label}</span>
    </button>
  );

  return (
    <div className="w-64 bg-slate-950 text-slate-300 flex flex-col h-screen border-r border-slate-800/60">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800/60">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">U</div>
        <span className="text-xl font-bold tracking-tight text-white">Upfrica</span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar">
        <div>
          <div className="px-4 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Main</div>
          <nav className="space-y-1">
            {mainItems.map(renderItem)}
          </nav>
        </div>

        <div>
          <div className="px-4 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Products</div>
          <nav className="space-y-1">
            {productItems.map(renderItem)}
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-slate-800/60 space-y-1 bg-slate-900/30">
        {bottomItems.map(renderItem)}
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors text-sm"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}
