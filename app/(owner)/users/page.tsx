import { supabase } from '../../../lib/supabaseClient';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Users() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return <p className="text-red-500">Not authenticated</p>;
  }
  const { data: role } = await supabase.from('roles').select('role').eq('user_id', session.user.id).single();
  if (role.role !== 'owner') {
    return <p className="text-red-500">Access denied</p>;
  }

  const { data: users } = await supabase.from('users').select('*');

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Users</h1>
        {users.map((u) => (
          <div key={u.id}>
            {u.email} - Blocked: {u.blocked ? 'Yes' : 'No'}
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}
