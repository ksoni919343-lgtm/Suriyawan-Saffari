import { supabase } from '../lib/supabaseClient';

export async function getDeliveries() {
  const { data, error } = await supabase.from('deliveries').select('*');
  if (error) throw error;
  return data;
}
