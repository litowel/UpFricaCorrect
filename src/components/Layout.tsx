import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { User, ViewState } from '../types';
import { motion } from 'motion/react';

interface LayoutProps {
  user: User | null;
  currentView: ViewState;
  navigate: (view: ViewState) => void;
  logout: () => void;
  children: React.ReactNode;
}

export function Layout({ user, currentView, navigate, logout, children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden font-sans text-slate-300">
      <Sidebar currentView={currentView} navigate={navigate} logout={logout} />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Header user={user} />
        <main className="flex-1 overflow-y-auto p-8">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
