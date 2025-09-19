import { supabase } from '../../../../lib/supabaseClient';
import ErrorBoundary from '../../../../components/ErrorBoundary';

export default async function MyOrders() {
  const { data: { session } } = await supabase.auth.getSession();
  const { data: orders } = await supabase.from('orders').select('*').eq('customer_id', session.user.id);

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">My Orders</h1>
        {orders.map((o) => (
          <div key={o.id}>
            Status: {o.status}
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}
