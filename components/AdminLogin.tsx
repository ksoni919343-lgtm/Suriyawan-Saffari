'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function AdminLogin() {
  const [email, setEmail] = useState('memberpoint89@gmail.com');
  const [password, setPassword] = useState('3567965s3567965');

  const handleLogin = async () => {
    await signIn('credentials', { email, password });
  };

  return <button onClick={handleLogin}>Admin Login</button>;
}
