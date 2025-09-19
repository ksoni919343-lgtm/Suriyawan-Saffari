'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import PhoneOTP from '../../../components/PhoneOTP';
import ErrorBoundary from '../../../components/ErrorBoundary';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      loginSchema.parse({ email, password });
      const res = await signIn('credentials', { email, password, redirect: false });
      if (res.error) throw new Error(res.error);
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-warmBrown">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin} className="mt-4">
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
          <button type="submit" className="bg-warmBrown text-white px-4 py-2 rounded">Login</button>
        </form>
        <PhoneOTP />
      </div>
    </ErrorBoundary>
  );
}
