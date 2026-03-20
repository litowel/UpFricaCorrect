/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useAppStore } from './store';
import { Layout } from './components/Layout';
import { HomeView } from './views/HomeView';
import { AuthView } from './views/AuthView';
import { DashboardView } from './views/DashboardView';
import { FlowPayView } from './views/FlowPayView';
import { CreatorXView } from './views/CreatorXView';
import { CopyTradeView } from './views/CopyTradeView';
import { MarketsView } from './views/MarketsView';
import { ForgeView } from './views/ForgeView';
import { KYCView } from './views/KYCView';
import { LendXView } from './views/LendXView';
import { PaymentsView } from './views/PaymentsView';
import { SettingsView } from './views/SettingsView';

export default function App() {
  const { user, setUser, currentView, navigate, login, logout, isLoading } = useAppStore();

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-slate-950">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center font-bold text-3xl text-white mb-4 shadow-lg shadow-indigo-500/20">
            U
          </div>
          <div className="text-slate-300 font-medium tracking-widest uppercase text-sm">Loading Upfrica...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    if (currentView === 'auth') {
      return <AuthView onLogin={login} onNavigate={navigate} />;
    }
    return <HomeView onNavigate={navigate} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView user={user} />;
      case 'flowpay':
        return <FlowPayView user={user} />;
      case 'creatorx':
        return <CreatorXView user={user} />;
      case 'copytrade':
        return <CopyTradeView user={user} />;
      case 'markets':
        return <MarketsView user={user} />;
      case 'forge':
        return <ForgeView user={user} />;
      case 'lendx':
        return <LendXView user={user} />;
      case 'payments':
        return <PaymentsView user={user} />;
      case 'settings':
        return <SettingsView user={user} />;
      case 'kyc':
        return <KYCView user={user} setUser={setUser} />;
      default:
        return <DashboardView user={user} />;
    }
  };

  return (
    <Layout user={user} currentView={currentView} navigate={navigate} logout={logout}>
      {renderView()}
    </Layout>
  );
}

