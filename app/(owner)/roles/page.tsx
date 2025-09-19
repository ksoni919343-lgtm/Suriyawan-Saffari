import { supabase } from '../../../lib/supabaseClient';
import RoleBadge from '../../../components/RoleBadge';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Roles() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return <p className="text-red-500">Not authenticated</p>;
  }
  const { data: role } = await supabase.from('roles').select('role').eq('user_id', session.user.id).single();
  if (role.role !== 'owner') {
    return <p className="text-red-500">Access denied</p>;
  }

  const { data: roles } = await supabase.from('roles').select('*');

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Roles</h1>
        {roles.map((r) => (
          <RoleBadge key={r.user_id} role={r.role} />
        ))}
      </div>
    </ErrorBoundary>
  );
}
