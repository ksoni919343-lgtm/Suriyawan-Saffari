import { supabase } from '../../../lib/supabaseClient';
import StatsCards from '../../../components/StatsCards';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function OwnerDashboard() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return <p className="text-red-500">Not authenticated</p>;
  }
  const { data: role } = await supabase.from('roles').select('role').eq('user_id', session.user.id).single();
  if (role.role !== 'owner') {
    return <p className="text-red-500">Access denied</p>;
  }

  const { count: productsCount } = await supabase.from('products').select('*', { count: 'exact' });
  const { count: ordersCount } = await supabase.from('orders').select('*', { count: 'exact' });

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Owner Dashboard</h1>
        <StatsCards stats={{ products: productsCount, orders: ordersCount }} />
      </div>
    </ErrorBoundary>
  );
}
