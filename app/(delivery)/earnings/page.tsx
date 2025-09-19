import { supabase } from '../../../lib/supabaseClient';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Earnings() {
  const { data: { session } } = await supabase.auth.getSession();
  const { data: deliveries } = await supabase.from('deliveries').select('*').eq('boy_id', session.user.id).eq('status', 'delivered');

  const earnings = deliveries.length * 20;

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Earnings</h1>
        <p>₹{earnings}</p>
      </div>
    </ErrorBoundary>
  );
}
