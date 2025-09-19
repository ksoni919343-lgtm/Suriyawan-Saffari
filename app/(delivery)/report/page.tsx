import { supabase } from '../../../lib/supabaseClient';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Report() {
  const { data: { session } } = await supabase.auth.getSession();
  const { data: runsheets } = await supabase.from('runsheets').select('*').eq('delivery_boy_id', session.user.id);

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Report</h1>
        {runsheets.map (r => (
          <div key={r.id}>
            Parcels: {r.parcels}
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}
