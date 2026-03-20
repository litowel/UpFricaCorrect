import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Globe2, TrendingUp, DollarSign, Layers, Code, Cpu, Server, Lock, Activity, CreditCard, Landmark, Paintbrush, Users, Box, Database, GitBranch, Cloud, ChevronDown, Terminal, Coins } from 'lucide-react';
import { ViewState } from '../types';

interface PublicProductViewProps {
  productId: string;
  onNavigate: (view: ViewState) => void;
}

export function PublicProductView({ productId, onNavigate }: PublicProductViewProps) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const products: Record<string, any> = {
    'product-flowpay': {
      name: 'FlowPay',
      tagline: 'Cross-border payments made simple.',
      description: 'Send and receive money globally with near-zero fees. FlowPay leverages blockchain technology to settle transactions instantly, bypassing traditional banking delays and exorbitant fees.',
      icon: <Globe2 size={48} className="text-blue-400" />,
      color: 'blue',
      problem: 'Traditional cross-border payments are slow, expensive, and opaque. Businesses in Africa struggle with high FX fees, settlement delays of up to 5 days, and lack of transparency in correspondent banking.',
      solution: 'FlowPay leverages stablecoin infrastructure and local payment rails to settle transactions instantly. We bypass the SWIFT network entirely, reducing costs by up to 90% and settling in seconds.',
      benefits: [
        'Instant Settlement: Funds arrive in seconds, not days.',
        'Low Fees: Save up to 90% compared to traditional remittance.',
        'Multi-currency: Support for major fiat and cryptocurrencies.',
        'Secure: Enterprise-grade encryption and compliance.',
        'API Access: Integrate FlowPay into your own app.',
        'Automated FX: Get the best rates automatically.',
        'No Hidden Fees: Transparent pricing model.',
        'Global Reach: Send money to 190+ countries.',
        '24/7 Support: We are here to help you succeed.',
        'Developer Friendly: Comprehensive documentation.'
      ],
      features: [
        { title: 'Paystack Integration', desc: 'Accept payments locally via Paystack and settle globally.', icon: <CreditCard className="text-blue-400" /> },
        { title: 'USDC Settlement', desc: 'Settle instantly in stablecoins to avoid volatility.', icon: <DollarSign className="text-blue-400" /> },
        { title: 'Fiat Off-ramps', desc: 'Convert crypto to local fiat easily directly to bank accounts.', icon: <Landmark className="text-blue-400" /> }
      ],
      steps: [
        'Sign up for an UpFrica account',
        'Select FlowPay from the dashboard',
        'Connect your local payment gateway',
        'Start accepting global payments'
      ],
      integrations: ['Paystack', 'Transak'],
      faqs: [
        { q: 'How fast are transfers?', a: 'Most transfers settle in under 5 seconds.' },
        { q: 'What are the fees?', a: 'We charge a flat 0.5% fee on cross-border transactions.' },
        { q: 'Is my money safe?', a: 'Yes, all funds are secured by institutional-grade custody solutions.' },
        { q: 'Which countries are supported?', a: 'We support payouts in over 50 countries globally.' },
        { q: 'Do I need a crypto wallet?', a: 'No, we handle all the crypto complexity behind the scenes.' }
      ]
    },
    'product-creatorx': {
      name: 'CreatorX',
      tagline: 'Monetize your audience directly.',
      description: 'A platform built for creators to launch their own tokens, NFTs, and subscription models. Take back control of your revenue from traditional social media platforms.',
      icon: <Paintbrush size={48} className="text-purple-400" />,
      color: 'purple',
      problem: 'Creators are at the mercy of platform algorithms and high take-rates (up to 50%). They lack direct ownership of their audience and struggle to monetize globally.',
      solution: 'CreatorX provides Web3 tools that allow creators to launch their own digital economies. By using smart contracts, creators keep 100% of their revenue and truly own their community relationships.',
      benefits: [
        'Creator Tokens: Launch your own personal economy.',
        'NFT Memberships: Offer exclusive access to your top fans.',
        'Direct Revenue: Keep 100% of your earnings minus network fees.',
        'Community Governance: Let your fans vote on your next project.',
        'Global Audience: Accept payments from anywhere in the world.',
        'No Deplatforming: Your smart contracts live forever on-chain.',
        'Custom Storefronts: Build your brand your way.',
        'Fiat On-ramps: Fans can pay with credit cards.',
        'Analytics: Deep insights into your community.',
        'Automated Royalties: Earn every time your NFTs are resold.'
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
        { q: 'Do I need coding skills?', a: 'No, CreatorX is completely no-code.' },
        { q: 'What blockchains are supported?', a: 'We currently support Ethereum, Polygon, and Base.' },
        { q: 'How do fans buy my token?', a: 'Fans can purchase using credit cards or existing crypto wallets.' },
        { q: 'What are the fees?', a: 'We charge a small 2.5% platform fee on primary sales.' },
        { q: 'Can I migrate my existing community?', a: 'Yes, we offer tools to airdrop tokens to your existing subscribers.' }
      ]
    },
    'product-copytrade': {
      name: 'CopyTrade',
      tagline: 'Mirror the best traders automatically.',
      description: 'Discover top-performing traders and automatically copy their trades in real-time. Build your portfolio by leveraging the expertise of proven professionals.',
      icon: <TrendingUp size={48} className="text-emerald-400" />,
      color: 'emerald',
      problem: 'Trading is complex, time-consuming, and risky for beginners. Most retail traders lose money because they lack the expertise and emotional discipline of professionals.',
      solution: 'CopyTrade democratizes access to professional trading strategies. By automatically mirroring the trades of vetted experts, beginners can achieve professional-level returns without staring at charts all day.',
      benefits: [
        'Automated Trading: Set it and forget it.',
        'Transparent Stats: Verify trader performance before copying.',
        'Risk Management: Set your own stop-loss and take-profit limits.',
        'Diverse Strategies: Access crypto, forex, and stock traders.',
        'Real-time Execution: Trades are copied in milliseconds.',
        'No Hidden Fees: Pay only a percentage of profitable trades.',
        'Full Control: Pause or stop copying at any time.',
        'Fund Security: Funds remain in your own exchange account.',
        'Performance Analytics: Track your ROI in real-time.',
        'Community: Discuss strategies with other copiers.'
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
        { q: 'Is there a minimum investment?', a: 'You can start copying with as little as $50.' },
        { q: 'Can I stop copying at any time?', a: 'Yes, you have full control and can disconnect instantly.' },
        { q: 'How do traders get paid?', a: 'Traders earn a small percentage (usually 10%) of the profits they generate for you.' },
        { q: 'Do I need to transfer my funds to you?', a: 'No, your funds stay securely on your connected exchange.' },
        { q: 'What happens if a trader loses money?', a: 'You will also incur losses. Always use the built-in risk management tools.' }
      ]
    },
    'product-markets': {
      name: 'Markets',
      tagline: 'Advanced trading for digital assets.',
      description: 'A professional-grade exchange offering deep liquidity, advanced charting, and lightning-fast execution for spot and derivatives trading.',
      icon: <Landmark size={48} className="text-amber-400" />,
      color: 'amber',
      problem: 'Institutional investors and advanced traders lack a unified platform that offers deep liquidity, regulatory compliance, and access to tokenized Real World Assets (RWAs).',
      solution: 'Markets provides an institutional-grade trading engine combined with a compliant framework for trading both traditional crypto assets and tokenized real estate, commodities, and private credit.',
      benefits: [
        'Deep Liquidity: Minimal slippage on large orders.',
        'Advanced Charting: Integrated TradingView charts with 100+ indicators.',
        'Low Latency: Matching engine capable of 1M+ orders per second.',
        'API Access: Robust REST and WebSocket APIs for algorithmic trading.',
        'RWA Access: Trade tokenized real estate and commodities.',
        'Institutional Custody: Assets secured by top-tier custodians.',
        'Margin Trading: Up to 10x leverage for qualified users.',
        'OTC Desk: Personalized service for large block trades.',
        'Fiat Integration: Seamless deposits and withdrawals.',
        'Regulatory Compliance: Built to meet global financial standards.'
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
      integrations: ['thirdweb', 'Escrow'],
      faqs: [
        { q: 'What are the trading fees?', a: 'Fees start at 0.1% and decrease based on your trading volume.' },
        { q: 'Do you offer margin trading?', a: 'Yes, up to 10x leverage is available for qualified users.' },
        { q: 'Is KYC required?', a: 'Yes, strict KYC/AML is required to comply with global regulations.' },
        { q: 'What RWAs are available?', a: 'We currently offer tokenized US Treasuries, real estate funds, and gold.' },
        { q: 'How is custody handled?', a: 'We partner with regulated, insured institutional custodians.' }
      ]
    },
    'product-forge': {
      name: 'Forge',
      tagline: 'AI-powered SaaS builder.',
      description: 'Turn your ideas into fully functional applications in minutes. Forge uses advanced AI to generate code, set up repositories, and deploy your app instantly.',
      icon: <Terminal size={48} className="text-indigo-400" />,
      color: 'indigo',
      problem: 'Building software is incredibly expensive and time-consuming. Founders spend months and tens of thousands of dollars just to launch an MVP, creating a massive barrier to entry.',
      solution: 'Forge leverages advanced LLMs to translate natural language prompts into production-ready code. It automates the entire development lifecycle—from writing code to GitHub repository creation and Netlify deployment.',
      benefits: [
        'Prompt-to-App: Describe your app in plain English.',
        'GitHub Integration: Automatically creates and pushes to your repo.',
        'Instant Deployment: Live on Netlify in seconds.',
        'Full Ownership: You own the generated source code.',
        'Modern Stack: Generates Next.js, React, and Tailwind CSS.',
        'Cost Effective: Build an MVP for pennies, not thousands.',
        'Iterative Design: Chat with the AI to refine your app.',
        'No Lock-in: Export your code and host it anywhere.',
        'Built-in Auth: Automatically configures user authentication.',
        'Database Ready: Generates schemas and connects to your DB.'
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
      integrations: ['GitHub', 'Netlify', 'Cursor API'],
      faqs: [
        { q: 'What tech stack does it use?', a: 'Forge generates React/Next.js applications with Tailwind CSS.' },
        { q: 'Can I edit the code later?', a: 'Yes, you have full access to the GitHub repository.' },
        { q: 'Do I need my own API keys?', a: 'You can use your own Cursor, GitHub, and Netlify keys for full control.' },
        { q: 'Is the code production-ready?', a: 'It is perfect for MVPs and prototypes, though complex apps may require manual refinement.' },
        { q: 'Who owns the IP?', a: 'You retain 100% ownership of the generated code and intellectual property.' }
      ]
    },
    'product-lendx': {
      name: 'LendX',
      tagline: 'Professional DeFi lending & liquidity.',
      description: 'Access decentralized lending protocols without the complexity. Deposit assets to earn yield, or borrow against your collateral instantly with aggregated liquidity.',
      icon: <Coins size={48} className="text-cyan-400" />,
      color: 'cyan',
      problem: 'Interacting with DeFi protocols like Aave or Compound requires deep technical knowledge, managing private keys, and navigating complex, intimidating user interfaces.',
      solution: 'LendX abstracts the complexity of DeFi. It provides a clean, Web2-style fintech interface that routes your transactions to the best decentralized liquidity pools securely under the hood.',
      benefits: [
        'Aggregated Liquidity: Best rates from Aave, Compound, and Morpho.',
        'Instant Loans: Borrow up to 50% LTV instantly without credit checks.',
        'Flash Loans: Access uncollateralized liquidity for arbitrage.',
        'Non-Custodial: You maintain control of your private keys.',
        'High Yield: Earn interest on your idle crypto assets.',
        'Automated Routing: Always get the lowest borrow APY.',
        'Risk Monitoring: Real-time health factor alerts.',
        'No Middlemen: Interact directly with smart contracts.',
        'Transparent Fees: See exact network and platform fees upfront.',
        'Educational Hub: Learn DeFi concepts safely.'
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
      integrations: ['Aave', 'Compound', 'Morpho'],
      faqs: [
        { q: 'What is a Flash Loan?', a: 'A loan that must be borrowed and repaid within the same blockchain transaction.' },
        { q: 'What happens if my collateral drops in value?', a: 'If your health factor drops below 1.0, your collateral may be liquidated to repay the loan.' },
        { q: 'Are there centralized API keys required?', a: 'No, LendX connects directly to decentralized protocols via your Web3 wallet.' },
        { q: 'What is LTV?', a: 'Loan-to-Value ratio. An LTV of 50% means you can borrow up to half the value of your collateral.' },
        { q: 'How does UpFrica make money here?', a: 'We charge a small fixed platform fee ($2) and a nominal fee on flash loans.' }
      ]
    }
  };

  const product = products[productId];

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Product not found.
        <button onClick={() => onNavigate('products')} className="ml-4 text-indigo-400 hover:text-indigo-300">
          Back to Products
        </button>
      </div>
    );
  }

  const colorMap: Record<string, string> = {
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    emerald: 'text-emerald-400',
    amber: 'text-amber-400',
    indigo: 'text-indigo-400',
    cyan: 'text-cyan-400',
  };

  const bgMap: Record<string, string> = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    indigo: 'bg-indigo-500',
    cyan: 'bg-cyan-500',
  };

  const borderMap: Record<string, string> = {
    blue: 'border-blue-500/20',
    purple: 'border-purple-500/20',
    emerald: 'border-emerald-500/20',
    amber: 'border-amber-500/20',
    indigo: 'border-indigo-500/20',
    cyan: 'border-cyan-500/20',
  };

  const textColor = colorMap[product.color];
  const bgColor = bgMap[product.color];
  const borderColor = borderMap[product.color];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Global Navbar */}
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

      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className={`w-24 h-24 mx-auto rounded-3xl ${bgColor}/10 flex items-center justify-center mb-8 border ${borderColor}`}>
          {product.icon}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {product.name}
        </h1>
        <h2 className={`text-2xl md:text-3xl font-medium ${textColor} mb-8`}>
          {product.tagline}
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          {product.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => onNavigate('auth')}
            className={`px-8 py-4 rounded-full font-medium ${bgColor} text-white hover:opacity-90 transition-opacity flex items-center gap-2 text-lg`}
          >
            Get Started <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => onNavigate('auth')}
            className="px-8 py-4 rounded-full font-medium border border-white/10 text-white hover:bg-white/5 transition-colors text-lg"
          >
            Log in
          </button>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-20 px-6 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
              <Shield size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white">The Problem</h3>
          </div>
          <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-red-500/30 pl-6">
            {product.problem}
          </p>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 rounded-full ${bgColor}/10 flex items-center justify-center ${textColor}`}>
              <Zap size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white">How UpFrica Solves This</h3>
          </div>
          <p className={`text-xl text-slate-300 leading-relaxed border-l-4 ${borderColor} pl-6`}>
            {product.solution}
          </p>
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <section className="py-20 px-6 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Why Choose {product.name}?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
            {product.benefits.map((benefit: string, i: number) => {
              const [title, desc] = benefit.split(': ');
              return (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className={`mt-1 shrink-0 ${textColor}`} size={20} />
                  <div>
                    <span className="font-bold text-white block mb-1">{title}</span>
                    <span className="text-slate-400">{desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURES SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Core Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.features.map((feature: any, i: number) => (
              <div key={i} className={`p-8 rounded-3xl border ${borderColor} bg-slate-900/40 hover:bg-slate-900/80 transition-colors`}>
                <div className={`w-14 h-14 rounded-2xl ${bgColor}/10 flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-20 px-6 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-16 text-center">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-800" />
            {product.steps.map((step: string, i: number) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${bgColor} text-white flex items-center justify-center text-2xl font-bold mb-6 relative z-10 shadow-lg shadow-${product.color}-500/20`}>
                  {i + 1}
                </div>
                <p className="text-slate-300 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. API / INFRASTRUCTURE */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Trusted Infrastructure</h3>
          <p className="text-slate-400 mb-12">Built on top of industry-leading protocols and APIs.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {product.integrations.map((integration: string, i: number) => (
              <div key={i} className="px-8 py-4 rounded-2xl border border-white/10 bg-slate-900/50 text-white font-medium text-lg flex items-center gap-3">
                <Layers className={textColor} size={20} />
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-20 px-6 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {product.faqs.map((faq: any, i: number) => (
              <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-slate-900/50">
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-white text-lg">{faq.q}</span>
                  <ChevronDown className={`text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <div className={`max-w-4xl mx-auto p-12 rounded-3xl border ${borderColor} bg-gradient-to-b from-${product.color}-500/10 to-transparent`}>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join thousands of users leveraging {product.name} on the UpFrica platform today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('auth')}
              className={`px-8 py-4 rounded-full font-medium ${bgColor} text-white hover:opacity-90 transition-opacity flex items-center gap-2 text-lg`}
            >
              Get Started Now <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate('auth')}
              className="px-8 py-4 rounded-full font-medium border border-white/10 text-white hover:bg-white/5 transition-colors text-lg"
            >
              Log in
            </button>
          </div>
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
