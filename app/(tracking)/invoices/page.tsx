import { supabase } from '../../../lib/supabaseClient';
import InvoiceModal from '../../../components/InvoiceModal';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Invoices() {
  const { data: orders } = await supabase.from('orders').select('*');

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Invoices</h1>
        {orders.map((o) => (
          <div key={o.id}>
            Order ID: {o.id}
            <InvoiceModal trackingId={o.tracking_id} />
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}
