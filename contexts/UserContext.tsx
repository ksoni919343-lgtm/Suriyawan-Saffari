import { createContext, useContext } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const UserContext = createContext();

export function UserProvider({ children }) {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session) {
      supabase.from('users').select('*').eq('id', session.user.id).single().then(({ data }) => setUser(data));
    }
  }, [session]);

  const logout = () => signOut();

  return <UserContext.Provider value={{ user, logout }}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);
