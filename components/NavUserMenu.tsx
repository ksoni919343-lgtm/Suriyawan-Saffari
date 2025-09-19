'use client';
import { useUser } from '../hooks/useUser';

export default function NavUserMenu() {
  const { user, logout } = useUser();

  return (
    <nav>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <a href="/auth/login">Login</a>
      )}
    </nav>
  );
}
