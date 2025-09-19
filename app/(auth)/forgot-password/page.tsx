'use client';
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { z } from 'zod';
import ErrorBoundary from '../../../components/ErrorBoundary';

const forgotSchema = z.object({
  email: z.string().email(),
});

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      forgotSchema.parse({ email });
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
      setSuccess('Password reset link sent!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-warmBrown">Forgot Password</h1>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleReset} className="mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-2 border rounded w-full mb-2"
          />
          <button type="submit" className="bg-warmBrown text-white px-4 py-2 rounded">Send Reset Link</button>
        </form>
      </div>
    </ErrorBoundary>
  );
}
