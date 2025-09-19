import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export const useUser = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session) {
      supabase.from('users').select('*').eq('id', session.user.id).single().then(({ data }) => setUser(data));
    }
  }, [session]);

  const logout = () => signOut();

  return { user, logout };
};
