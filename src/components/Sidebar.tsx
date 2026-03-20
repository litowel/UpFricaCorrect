import React from 'react';
import { LayoutDashboard, CreditCard, Paintbrush, ShieldCheck, LogOut, Wallet, TrendingUp, Landmark, Terminal } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  navigate: (view: ViewState) => void;
  logout: () => void;
}

export function Sidebar({ currentView, navigate, logout }: SidebarProps) {
  const menuItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'flowpay', label: 'FlowPay', icon: <CreditCard size={20} /> },
    { id: 'creatorx', label: 'CreatorX', icon: <Paintbrush size={20} /> },
    { id: 'copytrade', label: 'CopyTrade', icon: <TrendingUp size={20} /> },
    { id: 'markets', label: 'Markets', icon: <Landmark size={20} /> },
    { id: 'forge', label: 'Forge (AI)', icon: <Terminal size={20} /> },
    { id: 'kyc', label: 'KYC / KYB', icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen border-r border-slate-800">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">U</div>
        <span className="text-xl font-bold tracking-tight text-white">Upfrica</span>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
              currentView === item.id
                ? 'bg-indigo-500/10 text-indigo-400 shadow-md border border-indigo-500/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-2">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
