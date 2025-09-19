import { supabase } from '../../../../lib/supabaseClient';
import ImageViewer from '../../../../components/ImageViewer';
import ErrorBoundary from '../../../../components/ErrorBoundary';

export default async function Product({ params }) {
  const { id } = params;
  const { data: product } = await supabase.from('products').select('*').eq('id', id).single();

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">{product.name}</h1>
        <ImageViewer images={[product.image]} />
        <p className="text-tan">₹{product.price}</p>
        <p>{product.description}</p>
      </div>
    </ErrorBoundary>
  );
}
