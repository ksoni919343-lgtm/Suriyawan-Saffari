'use client';

import { useState } from 'react';

export default function OtpPage() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your send OTP logic here
    setSent(true);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your verify OTP logic here
  };

  return (
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
  );
}
