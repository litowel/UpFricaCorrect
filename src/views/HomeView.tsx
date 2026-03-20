import React from 'react';
import { ViewState } from '../types';
import { CreditCard, Paintbrush, TrendingUp, Landmark, Terminal, ArrowRight, Shield, Globe2, Zap, ChevronRight, Coins } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
  const products = [
    {
      id: 'flowpay',
      name: 'FlowPay',
      icon: CreditCard,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      description: 'Global fiat-to-crypto settlement. Seamlessly accept payments via Paystack and settle instantly in USDC. Built for modern African businesses.',
      features: ['Instant USDC Settlement', 'Paystack Integration', 'Multi-currency Support']
    },
    {
      id: 'creatorx',
      name: 'CreatorX',
      icon: Paintbrush,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      description: 'The ultimate monetization platform for creators. Manage subscriptions, token-gated content, and receive global payouts without borders.',
      features: ['Token-gated Content', 'Global Payouts', 'Subscription Management']
    },
    {
      id: 'copytrade',
      name: 'CopyTrade',
      icon: TrendingUp,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      description: 'Automated crypto trading. Follow top-performing traders, mirror their strategies in real-time, and manage your portfolio risk effortlessly.',
      features: ['Real-time Execution', 'Risk Management', 'Top Trader Leaderboard']
    },
    {
      id: 'markets',
      name: 'Markets',
      icon: Landmark,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      description: 'Access Real World Assets (RWA) through tokenization. Invest in fractionalized real estate, commodities, and private credit globally.',
      features: ['Fractional Ownership', '24/7 Liquidity', 'Regulated Assets']
    },
    {
      id: 'forge',
      name: 'Forge',
      icon: Terminal,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      description: 'AI-powered no-code SaaS builder. Go from prompt to deployed application in seconds. Auto-creates GitHub repos and deploys to Netlify.',
      features: ['Prompt-to-App', 'GitHub Auto-sync', '1-Click Netlify Deploy']
    },
    {
      id: 'lendx',
      name: 'LendX',
      icon: Coins,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      description: 'Instant crypto loans and DeFi liquidity. Borrow against your assets, access flash loans, and optimize yield strategies using Aave.',
      features: ['Overcollateralized Loans', 'Flash Loan Access', 'DeFi Yield Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-indigo-500/20">
              U
            </div>
            <span className="text-xl font-bold tracking-tight text-white">UpFrica</span>
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
              Get Started <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            A product of Oskayi Consult Ltd, Ghana
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            The Financial Engine <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              for Modern Africa
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Unify your payments, trading, tokenized assets, and software creation in one institutional-grade platform. Built for scale, security, and speed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('auth')}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium text-lg transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
            >
              Open an Account <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium text-lg transition-all flex items-center justify-center gap-2"
            >
              Explore Products
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Institutional Security</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Bank-grade encryption, mandatory 2FA, and robust KYC/KYB compliance protocols.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Globe2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Borderless Access</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Connect local African payment rails to global decentralized finance liquidity.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Instant settlements, real-time trading execution, and AI-powered deployments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">One Platform. <br className="md:hidden" />Infinite Possibilities.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Choose the product that fits your needs. Our integrated ecosystem allows you to seamlessly move between payments, trading, and building.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`group relative p-8 rounded-3xl border bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 ${product.borderColor}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${product.bgColor} ${product.color} flex items-center justify-center mb-6`}>
                    <product.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed min-h-[48px]">
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
                    onClick={() => {
                      localStorage.setItem("selectedProduct", product.id);
                      onNavigate('auth');
                    }}
                    className={`flex items-center gap-2 text-sm font-medium ${product.color} group-hover:gap-3 transition-all`}
                  >
                    Get started with {product.name} <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center bg-slate-900/50 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem]">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to transform your business?</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Join thousands of users building the future of finance and technology on UpFrica.
          </p>
          <button 
            onClick={() => onNavigate('auth')}
            className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-bold text-lg transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2 mx-auto"
          >
            Create Free Account <ArrowRight size={20} />
          </button>
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
