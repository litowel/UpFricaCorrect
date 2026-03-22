import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Globe2, TrendingUp, DollarSign, Layers, Code, Cpu, Server, Lock, Activity, CreditCard, Landmark, Paintbrush, Users, Box, Database, GitBranch, Cloud, ChevronDown, Terminal, Coins } from 'lucide-react';
import { ViewState, User } from '../types';
import { Navbar } from '../components/Navbar';
import { HeroSlider } from '../components/HeroSlider';

interface PublicProductViewProps {
  productId: string;
  onNavigate: (view: ViewState) => void;
  user?: User | null;
}

export function PublicProductView({ productId, onNavigate, user = null }: PublicProductViewProps) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const products: Record<string, any> = {
    'product-flowpay': {
      name: 'FlowPay',
      tagline: 'Global Payments. Instant Crypto Settlement.',
      description: 'Accept fiat via Paystack and settle instantly in crypto or stablecoins.',
      icon: <Globe2 size={48} className="text-blue-400" />,
      color: 'blue',
      problem: 'Businesses in Africa face delays, high fees, and restrictions in cross-border payments.',
      solution: 'Accept fiat via Paystack and settle instantly in crypto or stablecoins.',
      benefits: [
        'Instant settlement',
        'Global reach',
        'Multi-currency support',
        'Lower fees',
        'Faster cash flow',
        'Secure transactions',
        'Crypto-ready',
        'Scalable',
        'Easy integration',
        'Borderless business'
      ],
      features: [
        { title: 'Paystack Integration', desc: 'Accept payments locally via Paystack and settle globally.', icon: <CreditCard className="text-blue-400" /> },
        { title: 'Crypto Settlement', desc: 'Settle instantly in stablecoins to avoid volatility.', icon: <DollarSign className="text-blue-400" /> },
        { title: 'Fiat Off-ramps', desc: 'Convert crypto to local fiat easily directly to bank accounts.', icon: <Landmark className="text-blue-400" /> }
      ],
      steps: [
        'Sign up for an UpFrica account',
        'Select FlowPay from the dashboard',
        'Connect your local payment gateway',
        'Start accepting global payments'
      ],
      integrations: ['Paystack', 'Onramper/MoonPay'],
      faqs: [
        { q: 'What is FlowPay?', a: 'A payment system for fiat-to-crypto settlement.' },
        { q: 'How fast are transactions?', a: 'Near instant.' },
        { q: 'Is it secure?', a: 'Yes with encryption and 2FA.' },
        { q: 'Which currencies?', a: 'Multiple fiat and crypto.' },
        { q: 'Do I need a wallet?', a: 'Yes for crypto settlement.' }
      ],
      slides: [
        {
          id: 'flowpay-1',
          title: 'Global Payments. Instant Crypto Settlement.',
          subtitle: 'FlowPay',
          description: 'Accept fiat via Paystack and settle instantly in crypto or stablecoins.',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=2071',
          ctaText: user ? 'Go to Dashboard' : 'Get Started',
          onCtaClick: () => onNavigate(user ? 'dashboard' : 'auth')
        }
      ]
    },
    'product-creatorx': {
      name: 'CreatorX',
      tagline: 'Monetize Your Audience Without Borders.',
      description: 'Token-gated content and subscription monetization.',
      icon: <Paintbrush size={48} className="text-purple-400" />,
      color: 'purple',
      problem: 'Creators cannot easily monetize global audiences.',
      solution: 'Token-gated content and subscription monetization.',
      benefits: [
        'Recurring revenue',
        'Global access',
        'Token rewards',
        'No middlemen',
        'Instant payouts',
        'Community building',
        'Ownership economy',
        'Flexible pricing',
        'NFT access',
        'Creator independence'
      ],
      features: [
        { title: 'Smart Contract Deployment', desc: 'Deploy tokens and NFTs without writing code.', icon: <Code className="text-purple-400" /> },
        { title: 'Subscription Management', desc: 'Manage recurring crypto and fiat subscriptions.', icon: <Users className="text-purple-400" /> },
        { title: 'Token-Gated Content', desc: 'Restrict access to articles, videos, and communities.', icon: <Lock className="text-purple-400" /> }
      ],
      steps: [
        'Sign up for an UpFrica account',
        'Navigate to CreatorX and set up your profile',
        'Deploy your first NFT or Creator Token',
        'Share your storefront link with your audience'
      ],
      integrations: ['Paystack', 'thirdweb'],
      faqs: [
        { q: 'What is CreatorX?', a: 'A monetization platform.' },
        { q: 'Can I sell subscriptions?', a: 'Yes.' },
        { q: 'Do I need crypto knowledge?', a: 'No.' },
        { q: 'How do payouts work?', a: 'Instantly.' },
        { q: 'Is it global?', a: 'Yes.' }
      ],
      slides: [
        {
          id: 'creatorx-1',
          title: 'Monetize Your Audience Without Borders.',
          subtitle: 'CreatorX',
          description: 'Token-gated content and subscription monetization.',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070',
          ctaText: user ? 'Go to Dashboard' : 'Start Creating',
          onCtaClick: () => onNavigate(user ? 'dashboard' : 'auth')
        }
      ]
    },
    'product-copytrade': {
      name: 'CopyTrade',
      tagline: 'Trade Like the Best.',
      description: 'Copy top traders automatically.',
      icon: <TrendingUp size={48} className="text-emerald-400" />,
      color: 'emerald',
      problem: 'Users lack trading skills.',
      solution: 'Copy top traders automatically.',
      benefits: [
        'Passive income',
        'Real-time execution',
        'Risk control',
        'Automation',
        'Learning opportunity',
        'Portfolio growth',
        'Transparency',
        'No expertise needed',
        'Strategy access',
        'Scalable trading'
      ],
      features: [
        { title: 'Leaderboard', desc: 'Rankings based on ROI, risk score, and consistency.', icon: <Activity className="text-emerald-400" /> },
        { title: 'Risk Controls', desc: 'Advanced settings to protect your capital.', icon: <Shield className="text-emerald-400" /> },
        { title: 'API Integration', desc: 'Connects directly to your favorite exchanges.', icon: <Server className="text-emerald-400" /> }
      ],
      steps: [
        'Sign up for an UpFrica account',
        'Connect your exchange API keys via CopyTrade',
        'Browse the leaderboard and select a trader',
        'Allocate funds and start copying automatically'
      ],
      integrations: ['Pionex'],
      faqs: [
        { q: 'What is CopyTrade?', a: 'Auto trading system.' },
        { q: 'Is it risky?', a: 'Yes, markets fluctuate.' },
        { q: 'Can I stop anytime?', a: 'Yes.' },
        { q: 'Do I control funds?', a: 'Yes.' },
        { q: 'Is it beginner friendly?', a: 'Yes.' }
      ],
      slides: [
        {
          id: 'copytrade-1',
          title: 'Trade Like the Best.',
          subtitle: 'CopyTrade',
          description: 'Copy top traders automatically.',
          image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
          ctaText: user ? 'Go to Dashboard' : 'Start Copying',
          onCtaClick: () => onNavigate(user ? 'dashboard' : 'auth')
        }
      ]
    },
    'product-markets': {
      name: 'Markets',
      tagline: 'Invest in Real-World Assets Digitally.',
      description: 'Tokenized assets like real estate and commodities.',
      icon: <Landmark size={48} className="text-amber-400" />,
      color: 'amber',
      problem: 'Limited access to global investments.',
      solution: 'Tokenized assets like real estate and commodities.',
      benefits: [
        'Fractional ownership',
        'Global access',
        'Liquidity',
        'Transparency',
        'Diversification',
        'Low entry cost',
        'Secure ownership',
        'Blockchain-backed',
        '24/7 trading',
        'Institutional-grade'
      ],
      features: [
        { title: 'Tokenized Assets', desc: 'Trade fractions of real-world assets 24/7.', icon: <Box className="text-amber-400" /> },
        { title: 'Advanced Order Types', desc: 'Stop-loss, take-profit, trailing stops, and more.', icon: <TrendingUp className="text-amber-400" /> },
        { title: 'Institutional API', desc: 'High-frequency trading support via FIX and WebSockets.', icon: <Database className="text-amber-400" /> }
      ],
      steps: [
        'Sign up and complete institutional KYC/KYB',
        'Fund your account via wire transfer or crypto deposit',
        'Access the Markets trading terminal',
        'Execute trades across crypto and RWA pairs'
      ],
      integrations: ['thirdweb', 'Escrow.com'],
      faqs: [
        { q: 'What assets?', a: 'Real estate, commodities.' },
        { q: 'Is it secure?', a: 'Yes via blockchain.' },
        { q: 'Can I sell anytime?', a: 'Yes.' },
        { q: 'Minimum investment?', a: 'Low.' },
        { q: 'Is it global?', a: 'Yes.' }
      ],
      slides: [
        {
          id: 'markets-1',
          title: 'Invest in Real-World Assets Digitally.',
          subtitle: 'Markets',
          description: 'Tokenized assets like real estate and commodities.',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
          ctaText: user ? 'Go to Dashboard' : 'Start Trading',
          onCtaClick: () => onNavigate(user ? 'dashboard' : 'auth')
        }
      ]
    },
    'product-forge': {
      name: 'Forge',
      tagline: 'Build Apps with AI. No Code Needed.',
      description: 'AI generates and deploys SaaS apps.',
      icon: <Terminal size={48} className="text-indigo-400" />,
      color: 'indigo',
      problem: 'Building apps is complex.',
      solution: 'AI generates and deploys SaaS apps.',
      benefits: [
        'No coding',
        'Fast deployment',
        'Automation',
        'GitHub sync',
        'Netlify deploy',
        'AI-powered',
        'Scalable',
        'Cost efficient',
        'Beginner friendly',
        'Custom apps'
      ],
      features: [
        { title: 'AI Code Generation', desc: 'Powered by the latest models via Cursor API.', icon: <Cpu className="text-indigo-400" /> },
        { title: 'Version Control', desc: 'Automatic commits and branch management.', icon: <GitBranch className="text-indigo-400" /> },
        { title: 'CI/CD Pipeline', desc: 'Zero-config deployments to edge networks.', icon: <Cloud className="text-indigo-400" /> }
      ],
      steps: [
        'Sign up for an UpFrica account',
        'Open Forge and type your app idea into the prompt',
        'Review the generated code in the browser',
        'Click deploy to push to GitHub and Netlify'
      ],
      integrations: ['GitHub', 'Netlify', 'AI models'],
      faqs: [
        { q: 'What is Forge?', a: 'AI builder.' },
        { q: 'Do I need coding?', a: 'No.' },
        { q: 'Where is it deployed?', a: 'Netlify.' },
        { q: 'Can I edit apps?', a: 'Yes.' },
        { q: 'Is it fast?', a: 'Very fast.' }
      ],
      slides: [
        {
          id: 'forge-1',
          title: 'Build Apps with AI. No Code Needed.',
          subtitle: 'Forge',
          description: 'AI generates and deploys SaaS apps.',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
          ctaText: user ? 'Go to Dashboard' : 'Start Building',
          onCtaClick: () => onNavigate(user ? 'dashboard' : 'auth')
        }
      ]
    },
    'product-lendx': {
      name: 'LendX',
      tagline: 'Borrow Instantly. Powered by DeFi.',
      description: 'Borrow against crypto using DeFi protocols.',
      icon: <Coins size={48} className="text-cyan-400" />,
      color: 'cyan',
      problem: 'Loans are slow and restrictive.',
      solution: 'Borrow against crypto using DeFi protocols.',
      benefits: [
        'Instant loans',
        'No paperwork',
        'Global access',
        'Transparent',
        'Secure',
        'DeFi-powered',
        'Flexible borrowing',
        '24/7 access',
        'No banks',
        'Fast liquidity'
      ],
      features: [
        { title: 'Smart Routing', desc: 'Automatically finds the best rates across protocols.', icon: <Activity className="text-cyan-400" /> },
        { title: 'Flash Loan Module', desc: 'Execute complex arbitrage without upfront capital.', icon: <Zap className="text-cyan-400" /> },
        { title: 'Risk Dashboard', desc: 'Monitor liquidation thresholds in real-time.', icon: <Shield className="text-cyan-400" /> }
      ],
      steps: [
        'Sign up and connect your Web3 wallet',
        'Deposit assets (like ETH or USDC) to supply liquidity',
        'Use your deposit as collateral to borrow other assets',
        'Monitor your health factor via the dashboard'
      ],
      integrations: ['Aave', 'Compound', 'Alchemy', 'Moralis'],
      faqs: [
        { q: 'What is LendX?', a: 'DeFi lending platform.' },
        { q: 'Where does liquidity come from?', a: 'DeFi pools.' },
        { q: 'Do I need collateral?', a: 'Yes.' },
        { q: 'Is it instant?', a: 'Yes.' },
        { q: 'Is it global?', a: 'Yes.' }
      ],
      slides: [
        {
          id: 'lendx-1',
          title: 'Borrow Instantly. Powered by DeFi.',
          subtitle: 'LendX',
          description: 'Borrow against crypto using DeFi protocols.',
          image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=2069',
          ctaText: user ? 'Go to Dashboard' : 'Borrow Now',
          onCtaClick: () => onNavigate(user ? 'dashboard' : 'auth')
        }
      ]
    }
  };

  const product = products[productId];

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-900">
        Product not found.
        <button onClick={() => onNavigate('products')} className="ml-4 text-indigo-600 hover:text-indigo-500">
          Back to Products
        </button>
      </div>
    );
  }

  const colorMap: Record<string, string> = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    emerald: 'text-emerald-600',
    amber: 'text-amber-600',
    indigo: 'text-indigo-600',
    cyan: 'text-cyan-600',
  };

  const bgMap: Record<string, string> = {
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    emerald: 'bg-emerald-50',
    amber: 'bg-amber-50',
    indigo: 'bg-indigo-50',
    cyan: 'bg-cyan-50',
  };

  const borderMap: Record<string, string> = {
    blue: 'border-blue-200',
    purple: 'border-purple-200',
    emerald: 'border-emerald-200',
    amber: 'border-amber-200',
    indigo: 'border-indigo-200',
    cyan: 'border-cyan-200',
  };

  const textColor = colorMap[product.color];
  const bgColor = bgMap[product.color];
  const borderColor = borderMap[product.color];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar onNavigate={onNavigate} transparent={true} user={user} />

      {/* Hero Slider */}
      <HeroSlider slides={product.slides} />

      {/* 2. PROBLEM SECTION */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
              <Shield size={20} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">The Problem</h3>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-red-200 pl-6">
            {product.problem}
          </p>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center ${textColor}`}>
              <Zap size={20} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">How UpFrica Solves This</h3>
          </div>
          <p className={`text-xl text-slate-600 leading-relaxed border-l-4 ${borderColor} pl-6`}>
            {product.solution}
          </p>
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose {product.name}?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
            {product.benefits.map((benefit: string, i: number) => {
              const [title, desc] = benefit.split(': ');
              return (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className={`mt-1 shrink-0 ${textColor}`} size={20} />
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">{title}</span>
                    <span className="text-slate-600">{desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURES SECTION */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Core Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.features.map((feature: any, i: number) => (
              <div key={i} className={`p-8 rounded-3xl border ${borderColor} bg-white hover:shadow-lg transition-shadow`}>
                <div className={`w-14 h-14 rounded-2xl ${bgColor} flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-16 text-center">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-200" />
            {product.steps.map((step: string, i: number) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${bgColor} ${textColor} flex items-center justify-center text-2xl font-bold mb-6 relative z-10 border ${borderColor}`}>
                  {i + 1}
                </div>
                <p className="text-slate-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. API / INFRASTRUCTURE */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Trusted Infrastructure</h3>
          <p className="text-slate-600 mb-12">Built on top of industry-leading protocols and APIs.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {product.integrations.map((integration: string, i: number) => (
              <div key={i} className={`px-8 py-4 rounded-2xl border ${borderColor} bg-white text-slate-900 font-medium text-lg flex items-center gap-3 shadow-sm`}>
                <Layers className={textColor} size={20} />
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {product.faqs.map((faq: any, i: number) => (
              <div key={i} className={`border ${borderColor} rounded-2xl overflow-hidden bg-slate-50`}>
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-slate-900 text-lg">{faq.q}</span>
                  <ChevronDown className={`text-slate-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-32 px-6 text-center bg-slate-50">
        <div className={`max-w-4xl mx-auto p-12 rounded-3xl border ${borderColor} bg-white shadow-xl`}>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Join thousands of users leveraging {product.name} on the UpFrica platform today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {user ? (
              <button 
                onClick={() => onNavigate('dashboard')}
                className={`px-8 py-4 rounded-full font-medium ${bgColor.replace('50', '600')} text-white hover:opacity-90 transition-opacity flex items-center gap-2 text-lg shadow-lg`}
              >
                Go to Dashboard <ArrowRight size={20} />
              </button>
            ) : (
              <>
                <button 
                  onClick={() => onNavigate('auth')}
                  className={`px-8 py-4 rounded-full font-medium ${bgColor.replace('50', '600')} text-white hover:opacity-90 transition-opacity flex items-center gap-2 text-lg shadow-lg`}
                >
                  Get Started Now <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => onNavigate('auth')}
                  className="px-8 py-4 rounded-full font-medium border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors text-lg"
                >
                  Log in
                </button>
              </>
            )}
          </div>
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
