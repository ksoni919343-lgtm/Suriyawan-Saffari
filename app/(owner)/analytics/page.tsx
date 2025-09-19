import { supabase } from '../../../lib/supabaseClient';
import AnalyticsChart from '../../../components/AnalyticsChart';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Analytics() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return <p className="text-red-500">Not authenticated</p>;
  }
  const { data: role } = await supabase.from('roles').select('role').eq('user_id', session.user.id).single();
  if (role.role !== 'owner') {
    return <p className="text-red-500">Access denied</p>;
  }

  const { data: orders } = await supabase.from('orders').select('created_at, total_price');

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Analytics</h1>
        <AnalyticsChart data={orders} />
      </div>
    </ErrorBoundary>
  );
}
