import { supabase } from '../../../lib/supabaseClient';
import ParcelCard from '../../../components/ParcelCard';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Parcels() {
  const { data: { session } } = await supabase.auth.getSession();
  const { data: deliveries } = await supabase.from('deliveries').select('*').eq('boy_id', session.user.id);

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Parcels</h1>
        {deliveries.map (d => (
          <ParcelCard key={d.id} parcel={d} />
        ))}
      </div>
    </ErrorBoundary>
  );
}
