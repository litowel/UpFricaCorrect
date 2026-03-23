import React, { useState } from 'react';
import { User } from '../types';
import { CreditCard, ArrowUpRight, ArrowDownLeft, Clock, Search, Filter, Plus, Edit2, Trash2, Building, Check } from 'lucide-react';

interface PaymentsViewProps {
  user: User;
}

interface PaymentMethod {
  id: string;
  type: 'card' | 'bank';
  last4: string;
  expiry?: string;
  isDefault: boolean;
  name: string;
}

export function PaymentsView({ user }: PaymentsViewProps) {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    { id: '1', type: 'card', name: 'Visa', last4: '4242', expiry: '12/24', isDefault: true }
  ]);
  const [isAddingMethod, setIsAddingMethod] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ type: 'card', name: '', last4: '', expiry: '' });

  const handleSaveMethod = () => {
    if (editingId) {
      setPaymentMethods(methods => methods.map(m => m.id === editingId ? { ...m, ...formData } as PaymentMethod : m));
      setEditingId(null);
    } else {
      setPaymentMethods([...paymentMethods, { 
        id: Date.now().toString(), 
        type: formData.type as 'card' | 'bank', 
        name: formData.name || (formData.type === 'card' ? 'New Card' : 'New Bank'),
        last4: formData.last4.slice(-4) || '0000', 
        expiry: formData.expiry, 
        isDefault: paymentMethods.length === 0 
      }]);
      setIsAddingMethod(false);
    }
    setFormData({ type: 'card', name: '', last4: '', expiry: '' });
  };

  const handleDeleteMethod = (id: string) => {
    setPaymentMethods(methods => methods.filter(m => m.id !== id));
  };

  const handleSetDefault = (id: string) => {
    setPaymentMethods(methods => methods.map(m => ({ ...m, isDefault: m.id === id })));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Payments</h1>
          <p className="text-slate-400 mt-1">Manage your transactions and payment methods.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-colors flex items-center gap-2">
            <ArrowDownLeft size={18} />
            Receive
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/20 flex items-center gap-2">
            <ArrowUpRight size={18} />
            Send Payment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Transactions */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none w-48"
                  />
                </div>
                <button className="p-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
                  <Filter size={16} />
                </button>
              </div>
            </div>
            
            <div className="divide-y divide-slate-800/50">
              {/* Empty State */}
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-500">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-medium text-white mb-1">No transactions yet</h3>
                <p className="text-slate-400 text-sm">When you make or receive payments, they will appear here.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Payment Methods */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white">Payment Methods</h2>
              {!isAddingMethod && !editingId && (
                <button 
                  onClick={() => { setIsAddingMethod(true); setFormData({ type: 'card', name: '', last4: '', expiry: '' }); }}
                  className="text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
                >
                  <Plus size={16} /> Add New
                </button>
              )}
            </div>
            
            {(isAddingMethod || editingId) ? (
              <div className="space-y-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <h3 className="text-sm font-medium text-white mb-2">{editingId ? 'Edit Payment Method' : 'Add Payment Method'}</h3>
                <div className="flex gap-2 mb-2">
                  <button 
                    onClick={() => setFormData({...formData, type: 'card'})}
                    className={`flex-1 py-2 text-xs font-medium rounded-lg border ${formData.type === 'card' ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                  >
                    Credit Card
                  </button>
                  <button 
                    onClick={() => setFormData({...formData, type: 'bank'})}
                    className={`flex-1 py-2 text-xs font-medium rounded-lg border ${formData.type === 'bank' ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                  >
                    Bank Account
                  </button>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Name / Institution</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder={formData.type === 'card' ? "e.g. Chase Visa" : "e.g. Bank of America"} 
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex-[2]">
                    <label className="block text-xs text-slate-500 mb-1">{formData.type === 'card' ? 'Card Number' : 'Account Number'}</label>
                    <input 
                      type="text" 
                      value={formData.last4}
                      onChange={e => setFormData({...formData, last4: e.target.value})}
                      placeholder={formData.type === 'card' ? "**** **** **** 4242" : "**** 1234"} 
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none"
                    />
                  </div>
                  {formData.type === 'card' && (
                    <div className="flex-1">
                      <label className="block text-xs text-slate-500 mb-1">Expiry</label>
                      <input 
                        type="text" 
                        value={formData.expiry}
                        onChange={e => setFormData({...formData, expiry: e.target.value})}
                        placeholder="MM/YY" 
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none"
                      />
                    </div>
                  )}
                </div>
                <div className="flex gap-2 pt-2">
                  <button 
                    onClick={() => { setIsAddingMethod(false); setEditingId(null); }}
                    className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSaveMethod}
                    className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {paymentMethods.length === 0 ? (
                  <div className="text-center py-6 text-slate-500 text-sm">No payment methods added.</div>
                ) : (
                  paymentMethods.map(method => (
                    <div key={method.id} className="p-4 border border-slate-800 bg-slate-950 rounded-xl flex items-center gap-4 group hover:border-slate-700 transition-colors">
                      <div className="w-12 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 shrink-0">
                        {method.type === 'card' ? <CreditCard size={20} /> : <Building size={20} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-white text-sm truncate">{method.name}</div>
                        <div className="text-xs text-slate-500 flex items-center gap-2">
                          <span>•••• {method.last4.slice(-4)}</span>
                          {method.expiry && <span>• Expires {method.expiry}</span>}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {!method.isDefault && (
                          <button 
                            onClick={() => handleSetDefault(method.id)}
                            className="p-1.5 text-slate-400 hover:text-emerald-400 bg-slate-900 rounded-md transition-colors"
                            title="Set as default"
                          >
                            <Check size={14} />
                          </button>
                        )}
                        <button 
                          onClick={() => {
                            setFormData({ type: method.type, name: method.name, last4: method.last4, expiry: method.expiry || '' });
                            setEditingId(method.id);
                          }}
                          className="p-1.5 text-slate-400 hover:text-indigo-400 bg-slate-900 rounded-md transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button 
                          onClick={() => handleDeleteMethod(method.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-400 bg-slate-900 rounded-md transition-colors"
                          title="Remove"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      {method.isDefault && (
                        <div className="text-[10px] font-bold px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded uppercase tracking-wider shrink-0">
                          Default
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Quick Transfer */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Quick Transfer</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Send to</label>
                <input 
                  type="text" 
                  placeholder="Email or wallet address" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-7 pr-3 py-2 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>
              <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors">
                Send Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
