import { supabase } from '../../../../lib/supabaseClient';
import ErrorBoundary from '../../../../components/ErrorBoundary';

export default async function SellerOrders() {
  const { data: { session } } = await supabase.auth.getSession();
  const { data: orders } = await supabase.from('orders').select('*').eq('seller_id', session.user.id);

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Your Orders</h1>
        {orders.map((o) => (
          <div key={o.id}>
            Status: {o.status}
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}
