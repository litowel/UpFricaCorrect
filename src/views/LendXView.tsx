import React, { useState } from 'react';
import { User } from '../types';
import { Wallet, ArrowRight, Activity, Zap, Shield, ChevronRight, RefreshCw, Info, BookOpen, AlertTriangle, Lock, CheckCircle2, TrendingUp, DollarSign } from 'lucide-react';

interface LendXViewProps {
  user: User;
}

type Tab = 'dashboard' | 'borrow' | 'flash' | 'learn';

export function LendXView({ user }: LendXViewProps) {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [walletConnected, setWalletConnected] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [modalAction, setModalAction] = useState('');
  
  // Borrow State
  const [depositAmount, setDepositAmount] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');
  const [selectedProtocol, setSelectedProtocol] = useState<'aave' | 'compound' | 'morpho'>('aave');
  
  // Flash Loan State
  const [flashAmount, setFlashAmount] = useState('');
  const [flashAsset, setFlashAsset] = useState('USDC');

  const handleConnectWallet = () => {
    // Simulate wallet connection
    setTimeout(() => setWalletConnected(true), 1000);
  };

  const handleAction = (action: string) => {
    setModalAction(action);
    setShowConfirmModal(true);
  };

  const confirmAction = () => {
    // Simulate 2FA and transaction
    setTimeout(() => {
      setShowConfirmModal(false);
      alert(`${modalAction} successful!`);
    }, 1500);
  };

  // Calculations
  const depositValue = parseFloat(depositAmount) || 0;
  const maxBorrow = depositValue * 0.5; // 50% LTV
  const currentBorrow = parseFloat(borrowAmount) || 0;
  const healthFactor = depositValue === 0 ? 0 : (depositValue * 0.8) / (currentBorrow || 1); // Simplified health factor
  
  let riskLevel = 'Low';
  let riskColor = 'text-emerald-400';
  if (healthFactor > 0 && healthFactor < 1.5) {
    riskLevel = 'High';
    riskColor = 'text-rose-400';
  } else if (healthFactor >= 1.5 && healthFactor < 2.5) {
    riskLevel = 'Medium';
    riskColor = 'text-yellow-400';
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            <Zap className="text-cyan-400" size={32} />
            LendX
          </h1>
          <p className="text-slate-400 mt-1">Professional DeFi lending and liquidity platform.</p>
          <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
            <Info size={12} /> Liquidity is provided by decentralized protocols. No guaranteed profits.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          {!walletConnected ? (
            <button 
              onClick={handleConnectWallet}
              className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
            >
              <Wallet size={18} /> Connect Wallet
            </button>
          ) : (
            <div className="flex items-center gap-4 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-slate-200">0x71C...9A23</span>
              </div>
              <div className="h-4 w-px bg-slate-800" />
              <div className="text-sm font-medium text-slate-300">
                2.45 ETH
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex space-x-1 bg-slate-900/50 p-1 rounded-xl border border-slate-800 overflow-x-auto">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: Activity },
          { id: 'borrow', label: 'Deposit & Borrow', icon: DollarSign },
          { id: 'flash', label: 'Flash Loans', icon: Zap },
          { id: 'learn', label: 'Learn DeFi', icon: BookOpen },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as Tab)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="min-h-[500px]">
        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <div className="text-slate-400 text-sm font-medium mb-2">Total Deposits</div>
                <div className="text-3xl font-bold text-white">$0.00</div>
                <div className="text-slate-500 text-sm mt-2 flex items-center gap-1">No active deposits</div>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <div className="text-slate-400 text-sm font-medium mb-2">Total Borrowed</div>
                <div className="text-3xl font-bold text-white">$0.00</div>
                <div className="text-slate-500 text-sm mt-2 flex items-center gap-1">No active loans</div>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <div className="text-slate-400 text-sm font-medium mb-2">Health Factor</div>
                <div className="text-3xl font-bold text-slate-500">---</div>
                <div className="text-slate-500 text-sm mt-2">Liquidation at &lt; 1.0</div>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <div className="text-slate-400 text-sm font-medium mb-2">Liquidation Risk</div>
                <div className="text-3xl font-bold text-slate-500">---</div>
                <div className="text-slate-500 text-sm mt-2">Safe borrow limit: $0.00</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-slate-900 rounded-2xl border border-slate-800 p-6">
                <h3 className="text-lg font-bold text-white mb-6">Portfolio Overview</h3>
                <div className="h-64 flex flex-col items-center justify-center border border-slate-800 border-dashed rounded-xl bg-slate-950/50">
                  <Activity size={48} className="text-slate-700 mb-4" />
                  <span className="text-slate-500">No portfolio data available</span>
                </div>
              </div>
              
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
                <h3 className="text-lg font-bold text-white mb-6">Active Positions</h3>
                <div className="space-y-4 flex flex-col items-center justify-center h-48 text-center">
                  <span className="text-slate-500">You have no active positions.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BORROW TAB */}
        {activeTab === 'borrow' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-500">
            {/* Deposit Section */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-2">Deposit & Collateral</h2>
              <p className="text-slate-400 text-sm mb-8">Deposit assets to earn interest and use as collateral for loans.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Asset to Deposit</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none">
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="WBTC">Wrapped Bitcoin (WBTC)</option>
                    <option value="USDC">USD Coin (USDC)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-300">Amount</label>
                    <span className="text-sm text-slate-500">Balance: 2.45 ETH</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none text-lg"
                      placeholder="0.00"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium bg-slate-800 text-cyan-400 px-2 py-1 rounded-md hover:bg-slate-700">
                      MAX
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Collateral Value</span>
                    <span className="text-white font-medium">${(depositValue * 2800).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Max LTV (Loan-to-Value)</span>
                    <span className="text-white font-medium">50%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Est. APY</span>
                    <span className="text-emerald-400 font-medium">2.4%</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleAction('Deposit')}
                  disabled={!walletConnected || !depositAmount}
                  className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Shield size={18} /> Supply Collateral
                </button>
              </div>
            </div>

            {/* Borrow Section */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-2">Instant Loans</h2>
              <p className="text-slate-400 text-sm mb-8">Borrow against your collateral. Liquidity aggregated for best rates.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Asset to Borrow</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none">
                    <option value="USDC">USD Coin (USDC)</option>
                    <option value="USDT">Tether (USDT)</option>
                    <option value="DAI">Dai (DAI)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-300">Amount</label>
                    <span className="text-sm text-slate-500">Available: ${(depositValue * 2800 * 0.5).toFixed(2)}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={borrowAmount}
                      onChange={(e) => setBorrowAmount(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none text-lg"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                {/* Liquidity Aggregation */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Best Available Rates</label>
                  <div className="space-y-2">
                    {[
                      { id: 'aave', name: 'Aave V3', rate: '3.2%', fee: '1%' },
                      { id: 'compound', name: 'Compound', rate: '3.5%', fee: '1.2%' },
                      { id: 'morpho', name: 'Morpho', rate: '3.1%', fee: '1.5%' },
                    ].map(protocol => (
                      <div 
                        key={protocol.id}
                        onClick={() => setSelectedProtocol(protocol.id as any)}
                        className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-colors ${
                          selectedProtocol === protocol.id 
                            ? 'bg-cyan-500/10 border-cyan-500/50' 
                            : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${selectedProtocol === protocol.id ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                          <span className="text-white font-medium">{protocol.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-emerald-400">{protocol.rate} APR</div>
                          <div className="text-xs text-slate-500">Fee: {protocol.fee}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Health Factor</span>
                    <span className={`font-medium ${riskColor}`}>{healthFactor > 0 ? healthFactor.toFixed(2) : '---'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Risk Level</span>
                    <span className={`font-medium ${riskColor}`}>{depositValue > 0 ? riskLevel : '---'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Platform Fee</span>
                    <span className="text-white font-medium">$2.00</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleAction('Borrow')}
                  disabled={!walletConnected || !borrowAmount || currentBorrow > (depositValue * 2800 * 0.5)}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  Borrow USDC <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FLASH LOANS TAB */}
        {activeTab === 'flash' && (
          <div className="max-w-3xl mx-auto animate-in fade-in duration-500">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                    <Zap size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Flash Loans Module</h2>
                </div>
                <p className="text-slate-400 text-sm mb-6">Uncollateralized loans powered by Aave smart contracts.</p>

                <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 mb-8 flex gap-3">
                  <AlertTriangle className="text-rose-400 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-rose-400 font-medium text-sm">Important Warning</h4>
                    <p className="text-rose-300/80 text-sm mt-1">
                      Flash loans must be borrowed and repaid within the exact same blockchain transaction. If the repayment fails, the entire transaction is reverted.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Asset</label>
                      <select 
                        value={flashAsset}
                        onChange={(e) => setFlashAsset(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
                      >
                        <option value="USDC">USDC</option>
                        <option value="DAI">DAI</option>
                        <option value="WETH">WETH</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Amount</label>
                      <input
                        type="number"
                        value={flashAmount}
                        onChange={(e) => setFlashAmount(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
                        placeholder="100 - 50,000"
                        min="100"
                        max="50000"
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Service Fee (0.1% - 0.5%)</span>
                      <span className="text-white font-medium">0.3%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Platform Fee</span>
                      <span className="text-white font-medium">$2.00</span>
                    </div>
                    <div className="flex justify-between text-sm pt-3 border-t border-slate-800">
                      <span className="text-slate-300 font-medium">Total Repayment Required</span>
                      <span className="text-purple-400 font-bold">
                        {flashAmount ? (parseFloat(flashAmount) * 1.003).toFixed(2) : '0.00'} {flashAsset}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Target Smart Contract Address</label>
                    <input
                      type="text"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none font-mono text-sm"
                      placeholder="0x..."
                    />
                    <p className="text-xs text-slate-500 mt-2">The contract that will receive the loan and execute your logic.</p>
                  </div>

                  <button 
                    onClick={() => handleAction('Execute Flash Loan')}
                    disabled={!walletConnected || !flashAmount || parseFloat(flashAmount) < 100 || parseFloat(flashAmount) > 50000}
                    className="w-full py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                  >
                    Execute Flash Loan <Zap size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LEARN TAB */}
        {activeTab === 'learn' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
              <BookOpen size={48} className="text-cyan-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">DeFi Education Center</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Decentralized Finance (DeFi) can be complex. We've simplified the core concepts so you can lend and borrow safely.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-cyan-500/50 transition-colors cursor-pointer group">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">What is DeFi Lending?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Unlike traditional banks, DeFi lending uses smart contracts on a blockchain. You interact directly with a protocol (like Aave or Compound) to supply assets and earn interest, or borrow assets by providing collateral. There are no middlemen.
                </p>
              </div>

              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-cyan-500/50 transition-colors cursor-pointer group">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">How Collateral Works</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  To borrow, you must first deposit assets as collateral. Because crypto is volatile, loans are "overcollateralized". For example, to borrow $500 of USDC, you might need to deposit $1,000 worth of ETH. This protects the protocol.
                </p>
              </div>

              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-cyan-500/50 transition-colors cursor-pointer group">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Understanding Liquidation</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  If the value of your collateral drops significantly, your "Health Factor" decreases. If it falls below 1.0, your collateral may be automatically sold (liquidated) to repay your loan. Always maintain a safe borrow limit to avoid this risk.
                </p>
              </div>

              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-cyan-500/50 transition-colors cursor-pointer group">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Flash Loans Explained</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Flash loans allow you to borrow millions of dollars without collateral, provided you return the funds within the exact same transaction. They are typically used by developers for arbitrage (buying low on one exchange and selling high on another instantly).
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-6 text-white">
              <Lock className="text-cyan-400" />
              <h3 className="text-xl font-bold">Security Confirmation</h3>
            </div>
            
            <p className="text-slate-300 mb-6">
              You are about to execute: <strong className="text-white">{modalAction}</strong>. 
              Please confirm this transaction using your 2FA authenticator app.
            </p>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-400 mb-2">6-Digit 2FA Code</label>
              <input
                type="text"
                maxLength={6}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none text-center tracking-[0.5em] font-mono text-xl"
                placeholder="000000"
              />
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmAction}
                className="flex-1 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-medium transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
