import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export const useTracking = (id) => {
  const [tracking, setTracking] = useState(null);

  useEffect(() => {
    supabase.from('tracking').select('*').eq('id', id).single().then(({ data }) => setTracking(data));
  }, [id]);

  return tracking;
};
