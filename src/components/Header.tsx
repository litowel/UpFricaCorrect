import React from 'react';
import { User } from '../types';
import { Bell, Search, User as UserIcon } from 'lucide-react';

interface HeaderProps {
  user: User | null;
}

export function Header({ user }: HeaderProps) {
  return (
    <header className="h-20 bg-slate-950 border-b border-slate-800 px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4 w-96">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Search transactions, users..."
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl focus:bg-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-sm text-slate-300 placeholder-slate-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-400 hover:text-slate-200 transition-colors rounded-full hover:bg-slate-800">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-950"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
          <div className="flex flex-col items-end">
            <span className="text-sm font-semibold text-slate-200">{user?.name || 'Guest'}</span>
            <span className="text-xs text-slate-500 capitalize">{user?.kycStatus}</span>
          </div>
          <div className="w-10 h-10 bg-slate-800 text-indigo-400 rounded-full flex items-center justify-center border border-slate-700">
            <UserIcon size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
