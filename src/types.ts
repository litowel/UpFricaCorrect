export type User = {
  id: string;
  email: string;
  name: string;
  kycStatus: 'pending' | 'verified' | 'rejected' | 'unverified';
  walletBalance: number;
  usdcBalance: number;
  selectedProduct?: ViewState;
  twoFactorEnabled?: boolean;
};

export type Transaction = {
  id: string;
  amount: number;
  currency: string;
  status: 'success' | 'pending' | 'failed';
  date: string;
  description: string;
};

export type ViewState = 'home' | 'auth' | 'verify-2fa' | 'dashboard' | 'flowpay' | 'creatorx' | 'copytrade' | 'markets' | 'forge' | 'kyc' | 'lendx' | 'payments' | 'settings' | 'products' | 'product-flowpay' | 'product-creatorx' | 'product-copytrade' | 'product-markets' | 'product-forge' | 'product-lendx';
