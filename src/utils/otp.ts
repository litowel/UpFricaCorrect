export const generateOTP = (userId: string) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
  sessionStorage.setItem(`otp_${userId}`, JSON.stringify({ otp, expiresAt }));
  console.log(`[MOCK EMAIL] Your UpFrica 2FA code is: ${otp}`);
  return otp;
};

export const validateOTP = (userId: string, code: string) => {
  const stored = sessionStorage.getItem(`otp_${userId}`);
  if (!stored) return { valid: false, error: 'No OTP found. Please request a new one.' };
  
  const { otp, expiresAt } = JSON.parse(stored);
  if (Date.now() > expiresAt) {
    sessionStorage.removeItem(`otp_${userId}`);
    return { valid: false, error: 'OTP has expired. Please request a new one.' };
  }
  
  if (otp !== code) {
    return { valid: false, error: 'Invalid OTP code.' };
  }
  
  sessionStorage.removeItem(`otp_${userId}`);
  return { valid: true };
};
