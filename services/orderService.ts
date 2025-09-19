import { supabase } from '../lib/supabaseClient';

export async function getOrders() {
  const { data, error } = await supabase.from('orders').select('*');
  if (error) throw error;
  return data;
}
