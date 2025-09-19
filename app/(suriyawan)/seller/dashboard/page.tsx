import { supabase } from '../../../../lib/supabaseClient';
import ErrorBoundary from '../../../../components/ErrorBoundary';

export default async function SellerDashboard() {
  const { data: { session } } = await supabase.auth.getSession();
  const { data: products } = await supabase.from('products').select('*').eq('seller_id', session.user.id);

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Seller Dashboard</h1>
        <p>Products: {products.length}</p>
      </div>
    </ErrorBoundary>
  );
}
