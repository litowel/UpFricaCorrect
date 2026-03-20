import { useState, useEffect } from 'react';
import { User, ViewState } from './types';

export function useAppStore() {
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isLoading, setIsLoading] = useState(true);

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check session
    setTimeout(() => {
      const savedSession = localStorage.getItem('upfrica_session');
      const savedToken = localStorage.getItem('upfrica_token');
      
      if (savedSession && savedToken) {
        const parsedUser = JSON.parse(savedSession);
        setUser(parsedUser);
        setToken(savedToken);
        setCurrentView(parsedUser.selectedProduct || 'dashboard');
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
    setCurrentView(userData.selectedProduct || 'dashboard');
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('upfrica_session');
    localStorage.removeItem('upfrica_token');
    setCurrentView('auth');
  };

  const navigate = (view: ViewState) => {
    if (!user && view !== 'auth' && view !== 'home') {
      setCurrentView('auth');
      return;
    }
    setCurrentView(view);
  };

  return { user, setUser, currentView, navigate, login, logout, isLoading };
}
