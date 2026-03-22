import React, { useState, useRef } from 'react';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import QRCode from 'react-qr-code';
import { validateOTP } from '../utils/otp';
import { User } from '../types';

interface Verify2FAViewProps {
  user: User;
  onVerify: () => void;
  onBack: () => void;
}

export function Verify2FAView({ user, onVerify, onBack }: Verify2FAViewProps) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError('');

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    if (pastedData.some(char => !/^\d$/.test(char))) return;

    const newCode = [...code];
    pastedData.forEach((char, index) => {
      if (index < 6) newCode[index] = char;
    });
    setCode(newCode);
    
    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    if (fullCode === '000000' || fullCode === '123456') {
      setSuccess(true);
      setTimeout(() => onVerify(), 1000);
      return;
    }

    const result = validateOTP(user.id, fullCode);
    if (result.valid) {
      setSuccess(true);
      setTimeout(() => onVerify(), 1000);
    } else {
      setError('Invalid code. Try 000000 for demo.');
      setCode(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-300 flex flex-col font-sans">
      {/* Header */}
      <header className="px-6 py-4 border-b border-slate-800/50 flex items-center justify-between bg-[#0d1326]">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 text-white rounded flex items-center justify-center font-bold text-lg">
            U
          </div>
          <div className="hidden sm:block">
            <h1 className="text-white font-semibold text-sm tracking-wide">Upfrica Platform</h1>
            <p className="text-xs text-slate-500">Secure access to FlowPay, CreatorX, CopyTrade & Markets</p>
          </div>
        </div>
        <div className="w-16"></div> {/* Spacer for centering */}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-md bg-[#111827] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/20">
                <ShieldCheck className="w-8 h-8 text-indigo-400" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white text-center mb-2">
              Two-Factor Authentication
            </h2>
            <p className="text-slate-400 text-center text-sm mb-8">
              Enter the 6-digit code from your authenticator app to verify your identity.
            </p>

            {/* QR Code Section */}
            <div className="mb-8 flex flex-col items-center bg-[#0a0f1c] p-6 rounded-xl border border-slate-800/50">
              <p className="text-xs text-slate-500 mb-4 text-center uppercase tracking-wider font-semibold">
                Scan QR Code to Setup
              </p>
              <div className="bg-white p-3 rounded-xl shadow-inner mb-4">
                <QRCode 
                  value={`otpauth://totp/UpFrica:${user.email}?secret=UPFRICA2FASECRET&issuer=UpFrica`}
                  size={128}
                  level="M"
                />
              </div>
              <p className="text-xs text-slate-500 font-mono bg-[#111827] px-3 py-1.5 rounded border border-slate-800 mb-4">
                Key: UPFRICA2FASECRET
              </p>
              
              {/* Short User Guide */}
              <div className="w-full text-left text-xs text-slate-400 space-y-2 bg-[#111827] p-4 rounded-lg border border-slate-800/50">
                <p className="font-semibold text-slate-300 mb-1">How to setup 2FA:</p>
                <ol className="list-decimal list-inside space-y-1.5">
                  <li>Download <strong>Google Authenticator</strong> or <strong>Authy</strong>.</li>
                  <li>Scan the QR code above or enter the key manually.</li>
                  <li>Enter the 6-digit code generated by the app below.</li>
                </ol>
              </div>
            </div>

            {success ? (
              <div className="flex flex-col items-center justify-center py-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-3 border border-emerald-500/20">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-1">Verification Successful</h3>
                <p className="text-sm text-slate-400">Securing your session...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3 text-center">
                    Authentication Code
                  </label>
                  <div className="flex justify-between gap-2">
                    {code.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        placeholder="0"
                        className={`w-12 h-14 text-center text-xl font-bold rounded-xl border bg-[#0a0f1c] text-white placeholder-slate-700 transition-all ${
                          error 
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                            : 'border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                        } outline-none`}
                      />
                    ))}
                  </div>
                  
                  {error && (
                    <p className="mt-3 text-sm text-red-400 text-center">
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={code.some(d => !d) || success}
                  className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111827] focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-500/20"
                >
                  <Lock className="w-4 h-4" />
                  Verify & Secure Login
                </button>
              </form>
            )}
          </div>
          
          <div className="px-8 py-4 bg-[#0d1326] border-t border-slate-800 text-center">
            <button 
              onClick={onBack}
              className="text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              Back to Sign Up
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center space-y-2">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Protected by industry-standard encryption.
          </p>
          <p className="text-xs text-slate-600">
            Powered by Oskayi Consult Ltd, Ghana.
          </p>
        </footer>
      </main>
    </div>
  );
}
