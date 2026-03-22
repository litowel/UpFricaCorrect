import { useState, useEffect } from 'react';
import { User, ViewState } from './types';

export function useAppStore() {
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>(() => {
    const path = window.location.pathname.substring(1);
    if (path === '') return 'home';
    if (path.startsWith('product-')) return path as ViewState;
    if (['auth', 'dashboard', 'flowpay', 'creatorx', 'copytrade', 'markets', 'forge', 'kyc', 'lendx', 'payments', 'settings', 'products', 'verify-2fa'].includes(path)) {
      return path as ViewState;
    }
    return 'home';
  });
  const [isLoading, setIsLoading] = useState(true);
  const [is2FAVerified, setIs2FAVerified] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1);
      if (path === '') setCurrentView('home');
      else if (path.startsWith('product-')) setCurrentView(path as ViewState);
      else if (['auth', 'dashboard', 'flowpay', 'creatorx', 'copytrade', 'markets', 'forge', 'kyc', 'lendx', 'payments', 'settings', 'products', 'verify-2fa'].includes(path)) {
        setCurrentView(path as ViewState);
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Check session
    setTimeout(() => {
      const savedSession = localStorage.getItem('upfrica_session');
      const savedToken = localStorage.getItem('upfrica_token');
      const saved2FA = sessionStorage.getItem('upfrica_2fa_verified');
      
      const path = window.location.pathname.substring(1);
      const isProductPath = path.startsWith('product-') || path === 'products';
      
      if (savedSession && savedToken) {
        const parsedUser = JSON.parse(savedSession);
        setUser(parsedUser);
        setToken(savedToken);
        if (saved2FA === 'true') {
          setIs2FAVerified(true);
          // Only redirect to dashboard if on home or auth, otherwise keep current path
          if (path === '' || path === 'auth' || path === 'verify-2fa') {
            const nextView = parsedUser.selectedProduct || 'dashboard';
            setCurrentView(nextView);
            window.history.replaceState({}, '', `/${nextView}`);
          }
        } else {
          setIs2FAVerified(false);
          setCurrentView('verify-2fa');
          window.history.replaceState({}, '', '/verify-2fa');
        }
      } else if (!isProductPath && path !== '' && path !== 'auth') {
        setCurrentView('auth');
        window.history.replaceState({}, '', '/auth');
      }
      setIsLoading(false);
    }, 500);
  }, []);

  const login = (userData: User, jwtToken?: string) => {
    setUser(userData);
    localStorage.setItem('upfrica_session', JSON.stringify(userData));
    if (jwtToken) {
      setToken(jwtToken);
      localStorage.setItem('upfrica_token', jwtToken);
    }
    setIs2FAVerified(false);
    sessionStorage.removeItem('upfrica_2fa_verified');
    setCurrentView('verify-2fa');
    window.history.pushState({}, '', '/verify-2fa');
  };

  const verify2FA = () => {
    setIs2FAVerified(true);
    sessionStorage.setItem('upfrica_2fa_verified', 'true');
    const nextView = user?.selectedProduct || 'dashboard';
    setCurrentView(nextView);
    window.history.pushState({}, '', `/${nextView}`);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIs2FAVerified(false);
    localStorage.removeItem('upfrica_session');
    localStorage.removeItem('upfrica_token');
    sessionStorage.removeItem('upfrica_2fa_verified');
    setCurrentView('auth');
    window.history.pushState({}, '', '/auth');
  };

  const navigate = (view: ViewState) => {
    if (!user && view !== 'auth' && view !== 'home' && !view.startsWith('product')) {
      setCurrentView('auth');
      window.history.pushState({}, '', '/auth');
      return;
    }
    if (user && !is2FAVerified && view !== 'verify-2fa' && view !== 'auth') {
      setCurrentView('verify-2fa');
      window.history.pushState({}, '', '/verify-2fa');
      return;
    }
    if (user && is2FAVerified && view === 'home') {
      setCurrentView('dashboard');
      window.history.pushState({}, '', '/dashboard');
      return;
    }
    setCurrentView(view);
    window.history.pushState({}, '', view === 'home' ? '/' : `/${view}`);
  };

  return { user, setUser, currentView, navigate, login, logout, isLoading, is2FAVerified, verify2FA };
}
