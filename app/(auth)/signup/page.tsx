'use client';
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { z } from 'zod';
import ErrorBoundary from '../../../components/ErrorBoundary';

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      signupSchema.parse({ email, password });
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      alert('Signup successful! Please verify your email.');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-warmBrown">Signup</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSignup} className="mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-2 border rounded w-full mb-2"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2 border rounded w-full mb-2"
          />
          <button type="submit" className="bg-warmBrown text-white px-4 py-2 rounded">Signup</button>
        </form>
      </div>
    </ErrorBoundary>
  );
}
