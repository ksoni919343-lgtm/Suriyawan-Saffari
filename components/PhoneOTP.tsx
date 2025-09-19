'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function PhoneOTP() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = async () => {
    await signIn('otp', { phone });
    setSent(true);
  };

  const handleVerify = async () => {
    await signIn('otp', { phone, otp });
  };

  return (
    <div>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      {!sent ? (
        <button onClick={handleSend}>Send OTP</button>
      ) : (
        <>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={handleVerify}>Verify</button>
        </>
      )}
    </div>
  );
}
