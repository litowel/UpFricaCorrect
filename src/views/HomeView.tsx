import React from 'react';
import { ViewState } from '../types';
import { CreditCard, Paintbrush, TrendingUp, Landmark, Terminal, ArrowRight, Shield, Globe2, Zap, ChevronRight, Coins } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { HeroSlider } from '../components/HeroSlider';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
  const products = [
    {
      id: 'flowpay',
      name: 'FlowPay',
      icon: CreditCard,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      description: 'Global fiat-to-crypto settlement. Seamlessly accept payments via Paystack and settle instantly in USDC. Built for modern African businesses.',
      features: ['Instant USDC Settlement', 'Paystack Integration', 'Multi-currency Support']
    },
    {
      id: 'creatorx',
      name: 'CreatorX',
      icon: Paintbrush,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-100',
      description: 'The ultimate monetization platform for creators. Manage subscriptions, token-gated content, and receive global payouts without borders.',
      features: ['Token-gated Content', 'Global Payouts', 'Subscription Management']
    },
    {
      id: 'copytrade',
      name: 'CopyTrade',
      icon: TrendingUp,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
      description: 'Automated crypto trading. Follow top-performing traders, mirror their strategies in real-time, and manage your portfolio risk effortlessly.',
      features: ['Real-time Execution', 'Risk Management', 'Top Trader Leaderboard']
    },
    {
      id: 'markets',
      name: 'Markets',
      icon: Landmark,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-100',
      description: 'Access Real World Assets (RWA) through tokenization. Invest in fractionalized real estate, commodities, and private credit globally.',
      features: ['Fractional Ownership', '24/7 Liquidity', 'Regulated Assets']
    },
    {
      id: 'forge',
      name: 'Forge',
      icon: Terminal,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-100',
      description: 'AI-powered no-code SaaS builder. Go from prompt to deployed application in seconds. Auto-creates GitHub repos and deploys to Netlify.',
      features: ['Prompt-to-app generation', 'Code preview', 'GitHub integration', 'Netlify deploy']
    },
    {
      id: 'lendx',
      name: 'LendX',
      icon: Coins,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-100',
      description: 'Instant crypto loans and DeFi liquidity. Borrow against your assets, access flash loans, and optimize yield strategies using Aave.',
      features: ['Overcollateralized Loans', 'Flash Loan Access', 'DeFi Yield Optimization']
    }
  ];

  const slides = [
    {
      id: 'slide-1',
      title: 'The Financial Operating System for Africa and Global Economy',
      subtitle: 'Oskayi Consult Ltd, Ghana',
      description: 'Unify your payments, trading, tokenized assets, and software creation in one institutional-grade platform. Built for scale, security, and speed.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
      ctaText: 'Open an Account',
      onCtaClick: () => onNavigate('auth')
    },
    {
      id: 'slide-2',
      title: 'FlowPay: Global Fiat-to-Crypto Settlement',
      subtitle: 'Payments Infrastructure',
      description: 'Accept payments globally via Paystack and settle instantly in USDC. Eliminate FX risk and cross-border friction.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=2071',
      ctaText: 'Explore FlowPay',
      onCtaClick: () => onNavigate('product-flowpay' as ViewState)
    },
    {
      id: 'slide-3',
      title: 'CreatorX: Monetize Without Borders',
      subtitle: 'Creator Economy',
      description: 'The ultimate platform for creators to manage subscriptions, token-gated content, and receive global payouts instantly.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070',
      ctaText: 'Explore CreatorX',
      onCtaClick: () => onNavigate('product-creatorx' as ViewState)
    },
    {
      id: 'slide-4',
      title: 'CopyTrade: Automated Crypto Trading',
      subtitle: 'Algorithmic Trading',
      description: 'Follow top-performing traders, mirror their strategies in real-time, and manage your portfolio risk effortlessly.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
      ctaText: 'Explore CopyTrade',
      onCtaClick: () => onNavigate('product-copytrade' as ViewState)
    },
    {
      id: 'slide-5',
      title: 'Markets: Tokenized Real World Assets',
      subtitle: 'Institutional Assets',
      description: 'Invest in fractionalized real estate, commodities, and private credit globally with 24/7 liquidity.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
      ctaText: 'Explore Markets',
      onCtaClick: () => onNavigate('product-markets' as ViewState)
    },
    {
      id: 'slide-6',
      title: 'Forge: AI-Powered SaaS Builder',
      subtitle: 'Development Platform',
      description: 'Go from prompt to deployed application in seconds. Auto-creates GitHub repos and deploys to Netlify.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
      ctaText: 'Explore Forge',
      onCtaClick: () => onNavigate('product-forge' as ViewState)
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      <Navbar onNavigate={onNavigate} transparent={true} />

      {/* Hero Slider */}
      <HeroSlider slides={slides} />

      {/* Features Grid */}
      <section className="py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Institutional Security</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Bank-grade encryption, mandatory 2FA, and robust KYC/KYB compliance protocols.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Globe2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Borderless Access</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Connect local African payment rails to global decentralized finance liquidity.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Lightning Fast</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Instant settlements, real-time trading execution, and AI-powered deployments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-6 relative bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">One Platform. <br className="md:hidden" />Infinite Possibilities.</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Choose the product that fits your needs. Our integrated ecosystem allows you to seamlessly move between payments, trading, and building.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`group relative p-8 rounded-3xl border bg-white hover:shadow-xl transition-all duration-300 ${product.borderColor}`}
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${product.bgColor} ${product.color} flex items-center justify-center mb-6`}>
                    <product.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed min-h-[48px]">
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
                    onClick={() => {
                      onNavigate(`product-${product.id}` as ViewState);
                    }}
                    className={`flex items-center gap-2 text-sm font-medium ${product.color} group-hover:gap-3 transition-all`}
                  >
                    Learn more about {product.name} <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-white border-t border-slate-200">
        <div className="absolute inset-0 bg-indigo-50" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center bg-white border border-slate-200 p-12 md:p-20 rounded-[3rem] shadow-xl shadow-slate-200/50">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Ready to transform your business?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Join thousands of users building the future of finance and technology on UpFrica.
          </p>
          <button 
            onClick={() => onNavigate('auth')}
            className="px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full font-bold text-lg transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2 mx-auto"
          >
            Create Free Account <ArrowRight size={20} />
          </button>
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
