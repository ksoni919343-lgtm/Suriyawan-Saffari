import { supabase } from '../../../lib/supabaseClient';
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return <p className="text-red-500">Not authenticated</p>;
  }
  const { data: role } = await supabase.from('roles').select('role').eq('user_id', session.user.id).single();
  if (role.role !== 'owner') {
    return <p className="text-red-500">Access denied</p>;
  }

  const { data: orders } = await supabase.from('orders').select('*');

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Orders</h1>
        {orders.map((o) => (
          <div key={o.id}>
            Status: {o.status}
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}
