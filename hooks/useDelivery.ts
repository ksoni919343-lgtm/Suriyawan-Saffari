import { useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';

export const useDelivery = () => {
  const updateStatus = useCallback(async (id, status) => {
    await supabase.from('deliveries').update({ status }).eq('id', id);
  }, []);

  return updateStatus;
};
