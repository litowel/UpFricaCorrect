import React, { useState } from 'react';
import { User } from '../types';
import { User as UserIcon, Shield, Bell, Key, Smartphone, Mail, CheckCircle2 } from 'lucide-react';

interface SettingsViewProps {
  user: User;
}

export function SettingsView({ user }: SettingsViewProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications'>('profile');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Settings</h1>
        <p className="text-slate-400 mt-1">Manage your account preferences and security.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 space-y-1">
          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeTab === 'profile'
                ? 'bg-indigo-500/10 text-indigo-400'
                : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <UserIcon size={18} />
            Profile
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeTab === 'security'
                ? 'bg-indigo-500/10 text-indigo-400'
                : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <Shield size={18} />
            Security
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeTab === 'notifications'
                ? 'bg-indigo-500/10 text-indigo-400'
                : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <Bell size={18} />
            Notifications
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>
              
              <div className="flex items-center gap-6 pb-6 border-b border-slate-800">
                <div className="w-20 h-20 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center text-2xl font-bold border border-indigo-500/30">
                  {user.email.charAt(0).toUpperCase()}
                </div>
                <div>
                  <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors">
                    Change Avatar
                  </button>
                  <p className="text-xs text-slate-500 mt-2">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      type="email"
                      value={user.email}
                      disabled
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-slate-400 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-900/20">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-8">
              <h2 className="text-xl font-bold text-white mb-6">Security Settings</h2>
              
              {/* Password */}
              <div className="space-y-4 pb-6 border-b border-slate-800">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <Key size={18} className="text-slate-400" /> Password
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Current Password</label>
                    <input
                      type="password"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors">
                  Update Password
                </button>
              </div>

              {/* 2FA */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white flex items-center gap-2">
                    <Smartphone size={18} className="text-slate-400" /> Two-Factor Authentication
                  </h3>
                  {user.twoFactorEnabled ? (
                    <span className="flex items-center gap-1 text-emerald-400 text-sm font-medium bg-emerald-500/10 px-2.5 py-1 rounded-full">
                      <CheckCircle2 size={14} /> Enabled
                    </span>
                  ) : (
                    <span className="text-slate-500 text-sm font-medium bg-slate-800 px-2.5 py-1 rounded-full">
                      Disabled
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-400">
                  Add an extra layer of security to your account by requiring more than just a password to sign in.
                </p>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors">
                  {user.twoFactorEnabled ? 'Manage 2FA' : 'Enable 2FA'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-6">Notification Preferences</h2>
              
              <div className="space-y-4">
                {[
                  { title: 'Email Alerts', desc: 'Receive daily summary emails.', default: true },
                  { title: 'Push Notifications', desc: 'Get notified instantly on your device.', default: false },
                  { title: 'Marketing Updates', desc: 'Receive news about new products and features.', default: true },
                  { title: 'Security Alerts', desc: 'Get notified about unusual account activity.', default: true, locked: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-xl">
                    <div>
                      <div className="font-medium text-white text-sm">{item.title}</div>
                      <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={item.default} disabled={item.locked} />
                      <div className={`w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${item.locked ? 'opacity-50 cursor-not-allowed' : 'peer-checked:bg-indigo-500'}`}></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
