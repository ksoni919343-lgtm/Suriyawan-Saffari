import { supabase } from '../../../../lib/supabaseClient';
import ProductCard from '../../../../components/ProductCard';
import ErrorBoundary from '../../../../components/ErrorBoundary';

export default async function Search({ searchParams }) {
  const q = searchParams.q;
  const { data: products } = await supabase.from('products').select('*').ilike('name', `%${q}%`);

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Search Results for {q}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
}
