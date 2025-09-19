'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      await signIn('otp', { phone, redirect: false });
      setSent(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn('otp', { phone, otp, redirect: false });
      if (res.error) throw new Error(res.error);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-warmBrown">OTP Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={!sent ? handleSend : handleVerify} className="mt-4">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="p-2 border rounded w-full mb-2"
          />
          {sent && (
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="OTP"
              className="p-2 border rounded w-full mb-2"
            />
          )}
          <button type="submit" className="bg-warmBrown text-white px-4 py-2 rounded">
            {!sent ? 'Send OTP' : 'Verify'}
          </button>
        </form>
      </div>
    </ErrorBoundary>
  );
}
