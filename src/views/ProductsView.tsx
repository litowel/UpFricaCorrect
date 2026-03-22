import React from 'react';
import { ViewState, User } from '../types';
import { CreditCard, Paintbrush, TrendingUp, Landmark, Terminal, Coins, ArrowRight, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';

interface ProductsViewProps {
  onNavigate: (view: ViewState) => void;
  user?: User | null;
}

export function ProductsView({ onNavigate, user = null }: ProductsViewProps) {
  const products = [
    {
      id: 'flowpay',
      name: 'FlowPay',
      icon: CreditCard,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      description: 'Global fiat-to-crypto settlement. Seamlessly accept payments via Paystack and settle instantly in USDC.',
      features: ['Instant USDC Settlement', 'Paystack Integration', 'Multi-currency Support']
    },
    {
      id: 'creatorx',
      name: 'CreatorX',
      icon: Paintbrush,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-100',
      description: 'The ultimate monetization platform for creators. Manage subscriptions, token-gated content, and receive global payouts.',
      features: ['Token-gated Content', 'Global Payouts', 'Subscription Management']
    },
    {
      id: 'copytrade',
      name: 'CopyTrade',
      icon: TrendingUp,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
      description: 'Automated crypto trading. Follow top-performing traders, mirror their strategies in real-time, and manage risk.',
      features: ['Real-time Execution', 'Risk Management', 'Top Trader Leaderboard']
    },
    {
      id: 'markets',
      name: 'Markets',
      icon: Landmark,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-100',
      description: 'Access Real World Assets (RWA) through tokenization. Invest in fractionalized real estate, commodities, and private credit.',
      features: ['Fractional Ownership', '24/7 Liquidity', 'Regulated Assets']
    },
    {
      id: 'forge',
      name: 'Forge',
      icon: Terminal,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-100',
      description: 'AI-powered no-code SaaS builder. Go from prompt to deployed application in seconds. Auto-creates GitHub repos.',
      features: ['Prompt-to-app generation', 'Code preview', 'GitHub & Netlify integration']
    },
    {
      id: 'lendx',
      name: 'LendX',
      icon: Coins,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-100',
      description: 'Instant crypto loans and DeFi liquidity. Borrow against your assets, access flash loans, and optimize yield strategies.',
      features: ['Overcollateralized Loans', 'Flash Loan Access', 'DeFi Yield Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar onNavigate={onNavigate} user={user} />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center bg-white border-b border-slate-200">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Our Products</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore our suite of institutional-grade financial and technological tools designed to empower your business.
        </p>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className={`p-8 rounded-3xl border bg-white hover:shadow-xl transition-all duration-300 ${product.borderColor} flex flex-col`}>
              <div className={`w-14 h-14 rounded-2xl ${product.bgColor} ${product.color} flex items-center justify-center mb-6`}>
                <product.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-1">
                {product.description}
              </p>
              <div className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className={`w-1.5 h-1.5 rounded-full ${product.bgColor.replace('50', '500')}`} />
                    {feature}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => onNavigate(`product-${product.id}` as ViewState)}
                className={`w-full py-3 rounded-xl font-medium border ${product.borderColor} ${product.color} hover:${product.bgColor} transition-colors flex items-center justify-center gap-2`}
              >
                Explore Product <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">
              U
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">UpFrica</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Oskayi Consult Ltd, Ghana. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
