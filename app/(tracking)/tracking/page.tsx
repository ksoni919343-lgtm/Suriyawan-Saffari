import { supabase } from '../../../lib/supabaseClient';
import InvoiceModal from '../../../components/InvoiceModal';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Tracking() {
  const { data: trackings } = await supabase.from('tracking').select('*');

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Tracking</h1>
        {trackings.map((t) => (
          <div key={t.id}>
            Status: {t.status}
            <InvoiceModal trackingId={t.id} />
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}
