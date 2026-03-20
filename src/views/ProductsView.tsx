import React from 'react';
import { ViewState } from '../types';
import { CreditCard, Paintbrush, TrendingUp, Landmark, Terminal, Coins, ArrowRight, ChevronRight } from 'lucide-react';

interface ProductsViewProps {
  onNavigate: (view: ViewState) => void;
}

export function ProductsView({ onNavigate }: ProductsViewProps) {
  const products = [
    {
      id: 'flowpay',
      name: 'FlowPay',
      icon: CreditCard,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      description: 'Global fiat-to-crypto settlement. Seamlessly accept payments via Paystack and settle instantly in USDC.',
      features: ['Instant USDC Settlement', 'Paystack Integration', 'Multi-currency Support']
    },
    {
      id: 'creatorx',
      name: 'CreatorX',
      icon: Paintbrush,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      description: 'The ultimate monetization platform for creators. Manage subscriptions, token-gated content, and receive global payouts.',
      features: ['Token-gated Content', 'Global Payouts', 'Subscription Management']
    },
    {
      id: 'copytrade',
      name: 'CopyTrade',
      icon: TrendingUp,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      description: 'Automated crypto trading. Follow top-performing traders, mirror their strategies in real-time, and manage risk.',
      features: ['Real-time Execution', 'Risk Management', 'Top Trader Leaderboard']
    },
    {
      id: 'markets',
      name: 'Markets',
      icon: Landmark,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      description: 'Access Real World Assets (RWA) through tokenization. Invest in fractionalized real estate, commodities, and private credit.',
      features: ['Fractional Ownership', '24/7 Liquidity', 'Regulated Assets']
    },
    {
      id: 'forge',
      name: 'Forge',
      icon: Terminal,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      description: 'AI-powered no-code SaaS builder. Go from prompt to deployed application in seconds. Auto-creates GitHub repos.',
      features: ['Prompt-to-app generation', 'Code preview', 'GitHub & Netlify integration']
    },
    {
      id: 'lendx',
      name: 'LendX',
      icon: Coins,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      description: 'Instant crypto loans and DeFi liquidity. Borrow against your assets, access flash loans, and optimize yield strategies.',
      features: ['Overcollateralized Loans', 'Flash Loan Access', 'DeFi Yield Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-indigo-500/20">
                U
              </div>
              <span className="text-xl font-bold tracking-tight text-white">UpFrica</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
              <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
              <button onClick={() => onNavigate('products')} className="text-white">Products</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('auth')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2"
            >
              Log in
            </button>
            <button 
              onClick={() => onNavigate('auth')}
              className="text-sm font-medium bg-white text-slate-900 hover:bg-slate-100 transition-colors px-5 py-2.5 rounded-full flex items-center gap-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Our Products</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Explore our suite of institutional-grade financial and technological tools designed to empower your business.
        </p>
      </section>

      {/* Grid */}
      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className={`p-8 rounded-3xl border bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 ${product.borderColor} flex flex-col`}>
              <div className={`w-14 h-14 rounded-2xl ${product.bgColor} ${product.color} flex items-center justify-center mb-6`}>
                <product.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed flex-1">
                {product.description}
              </p>
              <div className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className={`w-1.5 h-1.5 rounded-full ${product.bgColor.replace('/10', '')}`} />
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
      <footer className="border-t border-white/5 py-12 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">
              U
            </div>
            <span className="text-lg font-bold tracking-tight text-white">UpFrica</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Oskayi Consult Ltd, Ghana. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
