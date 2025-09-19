import { supabase } from '../../../lib/supabaseClient';
import ProductCard from '../../../components/ProductCard';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Products() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return <p className="text-red-500">Not authenticated</p>;
  }
  const { data: role } = await supabase.from('roles').select('role').eq('user_id', session.user.id).single();
  if (role.role !== 'owner') {
    return <p className="text-red-500">Access denied</p>;
  }

  const { data: products } = await supabase.from('products').select('*');

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
}
