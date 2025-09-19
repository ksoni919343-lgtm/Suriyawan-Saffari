import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export const usePortalConfig = () => {
  const [config, setConfig] = useState({});

  useEffect(() => {
    supabase.from('settings').select('*').single().then(({ data }) => setConfig(data));
  }, []);

  return config;
};
