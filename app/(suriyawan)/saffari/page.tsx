import { supabase } from '../../../lib/supabaseClient';
import ProductCard from '../../../components/ProductCard';
import SearchBar from '../../../components/SearchBar';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Saffari() {
  const { data: products } = await supabase.from('products').select('*');

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Suriyawan Saffari Store</h1>
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
}
