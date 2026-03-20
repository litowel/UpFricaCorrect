import React, { useState } from 'react';
import { User } from '../types';
import { ShieldCheck, Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

interface KYCViewProps {
  user: User | null;
  setUser: (user: User) => void;
}

export function KYCView({ user, setUser }: KYCViewProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      if (user) {
        setUser({ ...user, kycStatus: 'pending' });
      }
    }, 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-slate-100 tracking-tight flex items-center gap-3">
          <ShieldCheck className="text-indigo-400" size={32} />
          Identity & Business Verification
        </h1>
        <p className="text-slate-400 mt-1">Complete KYC/KYB to unlock all features of Upfrica Platform.</p>
      </div>

      <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
        <div className="p-8 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-100">Current Status</h2>
              <p className="text-slate-400 mt-1">Your verification level determines your account limits.</p>
            </div>
            <div className={`px-4 py-2 rounded-full font-bold capitalize flex items-center gap-2 ${
              user?.kycStatus === 'verified' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
              user?.kycStatus === 'pending' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
              'bg-slate-800 text-slate-400 border border-slate-700'
            }`}>
              {user?.kycStatus === 'verified' && <CheckCircle2 size={18} />}
              {user?.kycStatus === 'pending' && <AlertCircle size={18} />}
              {user?.kycStatus}
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-slate-800 rounded-xl p-6 relative overflow-hidden">
              {user?.kycStatus === 'verified' && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  COMPLETED
                </div>
              )}
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-4">
                <FileText size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Personal Identity (KYC)</h3>
              <p className="text-sm text-slate-400 mt-2">Upload a government-issued ID (Passport, Driver's License, or National ID) and a selfie.</p>
              
              <div className="mt-6">
                <button 
                  disabled={user?.kycStatus === 'verified' || user?.kycStatus === 'pending'}
                  className="w-full bg-slate-950 border-2 border-dashed border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-800 hover:border-indigo-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Upload size={24} className="mb-2" />
                  <span className="font-medium">Click to upload document</span>
                  <span className="text-xs mt-1">JPG, PNG or PDF (Max 5MB)</span>
                </button>
              </div>
            </div>

            <div className="border border-slate-800 rounded-xl p-6 relative overflow-hidden">
              {user?.kycStatus === 'verified' && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  COMPLETED
                </div>
              )}
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Business Verification (KYB)</h3>
              <p className="text-sm text-slate-400 mt-2">Required for FlowPay merchants. Upload Certificate of Incorporation and Proof of Address.</p>
              
              <div className="mt-6">
                <button 
                  onClick={handleUpload}
                  disabled={isUploading || user?.kycStatus === 'verified' || user?.kycStatus === 'pending'}
                  className="w-full bg-slate-950 border-2 border-dashed border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-800 hover:border-indigo-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUploading ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600 mb-2"></div>
                  ) : (
                    <Upload size={24} className="mb-2" />
                  )}
                  <span className="font-medium">{isUploading ? 'Uploading...' : 'Click to upload document'}</span>
                  <span className="text-xs mt-1">JPG, PNG or PDF (Max 5MB)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
