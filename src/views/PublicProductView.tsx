import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Globe2, TrendingUp, DollarSign, Layers, Code, Cpu, Server, Lock, Activity, CreditCard, Landmark, Paintbrush, Users, Box, Database, GitBranch, Cloud, ChevronDown, Terminal, Coins } from 'lucide-react';
import { ViewState } from '../types';
import { Navbar } from '../components/Navbar';
import { HeroSlider } from '../components/HeroSlider';

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
      ],
      slides: [
        {
          id: 'flowpay-1',
          title: 'Global Payments, Local Feel',
          subtitle: 'FlowPay',
          description: 'Accept payments globally and settle instantly in USDC. Built for modern African businesses.',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=2071',
          ctaText: 'Get Started',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'flowpay-2',
          title: 'Instant Settlement',
          subtitle: 'Speed',
          description: 'Funds arrive in seconds, not days. Bypass traditional banking delays.',
          image: 'https://images.unsplash.com/photo-1580519542036-ed47c0ce31d7?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Learn More',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'flowpay-3',
          title: 'Paystack Integration',
          subtitle: 'Seamless',
          description: 'Connect your existing Paystack account and start accepting global payments instantly.',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Connect Now',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'flowpay-4',
          title: 'Multi-currency Support',
          subtitle: 'Global',
          description: 'Support for major fiat and cryptocurrencies. Let your customers pay how they want.',
          image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=2069',
          ctaText: 'View Currencies',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'flowpay-5',
          title: 'Enterprise Security',
          subtitle: 'Secure',
          description: 'Bank-grade encryption and compliance. Your funds are always safe.',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Read Security Docs',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'flowpay-6',
          title: 'Developer Friendly API',
          subtitle: 'Build',
          description: 'Integrate FlowPay into your own app with our comprehensive documentation and SDKs.',
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'View API Docs',
          onCtaClick: () => onNavigate('auth')
        }
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
      ],
      slides: [
        {
          id: 'creatorx-1',
          title: 'Monetize Without Borders',
          subtitle: 'CreatorX',
          description: 'Launch your own tokens, NFTs, and subscription models. Take back control of your revenue.',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Start Creating',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'creatorx-2',
          title: 'Creator Tokens',
          subtitle: 'Economy',
          description: 'Launch your own personal economy and let your fans invest in your success.',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2064',
          ctaText: 'Launch Token',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'creatorx-3',
          title: 'NFT Memberships',
          subtitle: 'Exclusive',
          description: 'Offer exclusive access to your top fans with verifiable digital memberships.',
          image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=2097',
          ctaText: 'Create NFTs',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'creatorx-4',
          title: 'Direct Revenue',
          subtitle: '100% Yours',
          description: 'Keep 100% of your earnings minus network fees. No more 50% platform cuts.',
          image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'View Pricing',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'creatorx-5',
          title: 'Token-Gated Content',
          subtitle: 'Premium',
          description: 'Restrict access to articles, videos, and communities to your token holders.',
          image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2074',
          ctaText: 'Setup Gates',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'creatorx-6',
          title: 'Custom Storefronts',
          subtitle: 'Brand',
          description: 'Build your brand your way with fully customizable storefronts and landing pages.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
          ctaText: 'Design Store',
          onCtaClick: () => onNavigate('auth')
        }
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
      ],
      slides: [
        {
          id: 'copytrade-1',
          title: 'Automated Crypto Trading',
          subtitle: 'CopyTrade',
          description: 'Follow top-performing traders, mirror their strategies in real-time, and manage your portfolio risk effortlessly.',
          image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Start Copying',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'copytrade-2',
          title: 'Top Trader Leaderboard',
          subtitle: 'Discover',
          description: 'Find the best traders based on ROI, risk score, and consistency. Transparent stats for everyone.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'View Leaderboard',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'copytrade-3',
          title: 'Real-time Execution',
          subtitle: 'Speed',
          description: 'Trades are copied in milliseconds. Never miss a market movement again.',
          image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'See Performance',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'copytrade-4',
          title: 'Advanced Risk Management',
          subtitle: 'Protect',
          description: 'Set your own stop-loss and take-profit limits. You are always in control of your capital.',
          image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Set Limits',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'copytrade-5',
          title: 'Secure API Integration',
          subtitle: 'Security',
          description: 'Connects directly to your favorite exchanges. Your funds never leave your account.',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Connect Exchange',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'copytrade-6',
          title: 'Performance Analytics',
          subtitle: 'Track',
          description: 'Track your ROI in real-time with beautiful, easy-to-understand charts and dashboards.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
          ctaText: 'View Dashboard',
          onCtaClick: () => onNavigate('auth')
        }
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
      ],
      slides: [
        {
          id: 'markets-1',
          title: 'Tokenized Real World Assets',
          subtitle: 'Markets',
          description: 'Invest in fractionalized real estate, commodities, and private credit globally with 24/7 liquidity.',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Start Trading',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'markets-2',
          title: 'Deep Liquidity',
          subtitle: 'Institutional',
          description: 'Minimal slippage on large orders. Built for institutional investors and advanced traders.',
          image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'View Order Book',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'markets-3',
          title: 'Advanced Charting',
          subtitle: 'Analysis',
          description: 'Integrated TradingView charts with 100+ indicators. Perform deep technical analysis.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Open Charts',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'markets-4',
          title: 'Low Latency Engine',
          subtitle: 'Speed',
          description: 'Matching engine capable of 1M+ orders per second. Lightning-fast execution.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034',
          ctaText: 'Test API',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'markets-5',
          title: 'Margin Trading',
          subtitle: 'Leverage',
          description: 'Up to 10x leverage for qualified users. Maximize your trading potential.',
          image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Apply for Margin',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'markets-6',
          title: 'Regulatory Compliance',
          subtitle: 'Secure',
          description: 'Built to meet global financial standards. Institutional custody and robust KYC/KYB.',
          image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Read Compliance Docs',
          onCtaClick: () => onNavigate('auth')
        }
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
      ],
      slides: [
        {
          id: 'forge-1',
          title: 'AI-Powered SaaS Builder',
          subtitle: 'Forge',
          description: 'Go from prompt to deployed application in seconds. Auto-creates GitHub repos and deploys to Netlify.',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Start Building',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'forge-2',
          title: 'Prompt-to-App Generation',
          subtitle: 'Magic',
          description: 'Describe your app in plain English and watch Forge generate production-ready code instantly.',
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Try a Prompt',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'forge-3',
          title: 'GitHub Integration',
          subtitle: 'Version Control',
          description: 'Automatically creates repositories, commits code, and manages branches for you.',
          image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=2088',
          ctaText: 'Connect GitHub',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'forge-4',
          title: 'Instant Netlify Deploy',
          subtitle: 'Hosting',
          description: 'Zero-config deployments to edge networks. Your app is live on the internet in seconds.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
          ctaText: 'Deploy Now',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'forge-5',
          title: 'Modern Tech Stack',
          subtitle: 'Architecture',
          description: 'Generates high-quality React, Next.js, and Tailwind CSS code. No vendor lock-in.',
          image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'View Stack',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'forge-6',
          title: 'Iterative Design',
          subtitle: 'Refine',
          description: 'Chat with the AI to refine your app, add features, and fix bugs conversationally.',
          image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Start Chatting',
          onCtaClick: () => onNavigate('auth')
        }
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
      ],
      slides: [
        {
          id: 'lendx-1',
          title: 'Instant Crypto Loans',
          subtitle: 'LendX',
          description: 'Borrow against your assets instantly without credit checks. Access DeFi liquidity with ease.',
          image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=2069',
          ctaText: 'Borrow Now',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'lendx-2',
          title: 'Aggregated Liquidity',
          subtitle: 'Best Rates',
          description: 'Smart routing automatically finds the best rates across Aave, Compound, and Morpho.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Compare Rates',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'lendx-3',
          title: 'Flash Loans',
          subtitle: 'Arbitrage',
          description: 'Access uncollateralized liquidity for complex arbitrage opportunities in a single transaction.',
          image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Execute Flash Loan',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'lendx-4',
          title: 'High Yield Savings',
          subtitle: 'Earn',
          description: 'Deposit your idle crypto assets and earn high-yield interest paid out continuously.',
          image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Start Earning',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'lendx-5',
          title: 'Non-Custodial',
          subtitle: 'Control',
          description: 'You maintain full control of your private keys. Interact directly with smart contracts.',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070',
          ctaText: 'Connect Wallet',
          onCtaClick: () => onNavigate('auth')
        },
        {
          id: 'lendx-6',
          title: 'Risk Dashboard',
          subtitle: 'Monitor',
          description: 'Real-time health factor alerts and liquidation monitoring to protect your collateral.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
          ctaText: 'View Dashboard',
          onCtaClick: () => onNavigate('auth')
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
      <Navbar onNavigate={onNavigate} transparent={true} />

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
