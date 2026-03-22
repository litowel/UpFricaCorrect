import React, { useState } from 'react';
import { ViewState } from '../types';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  transparent?: boolean;
}

export function Navbar({ onNavigate, transparent = false }: NavbarProps) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    { id: 'flowpay', name: 'FlowPay' },
    { id: 'creatorx', name: 'CreatorX' },
    { id: 'copytrade', name: 'CopyTrade' },
    { id: 'markets', name: 'Markets' },
    { id: 'forge', name: 'Forge' },
    { id: 'lendx', name: 'LendX' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${transparent ? 'bg-transparent' : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-indigo-500/20">
              U
            </div>
            <span className={`text-xl font-bold tracking-tight ${transparent ? 'text-white' : 'text-slate-900'}`}>UpFrica</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button 
              onClick={() => onNavigate('home')} 
              className={`${transparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}
            >
              Home
            </button>
            
            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button 
                onClick={() => onNavigate('products')} 
                className={`flex items-center gap-1 ${transparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors py-2`}
              >
                Products <ChevronDown size={14} className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 transition-all duration-200 origin-top-left ${isProductsOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              >
                {products.map(product => (
                  <button
                    key={product.id}
                    onClick={() => {
                      setIsProductsOpen(false);
                      onNavigate(`product-${product.id}` as ViewState);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
                  >
                    {product.name}
                  </button>
                ))}
                <div className="h-px bg-slate-100 my-1 mx-4" />
                <button
                  onClick={() => {
                    setIsProductsOpen(false);
                    onNavigate('products');
                  }}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-slate-50 transition-colors"
                >
                  View All Products
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('auth')}
            className={`text-sm font-medium ${transparent ? 'text-white hover:text-white/80' : 'text-slate-600 hover:text-slate-900'} transition-colors px-4 py-2`}
          >
            Log in
          </button>
          <button 
            onClick={() => onNavigate('auth')}
            className={`text-sm font-medium ${transparent ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'} transition-colors px-5 py-2.5 rounded-full flex items-center gap-2`}
          >
            Get Started <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
}
