import { supabase } from '../../../lib/supabaseClient';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Logs() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return <p className="text-red-500">Not authenticated</p>;
  }
  const { data: role } = await supabase.from('roles').select('role').eq('user_id', session.user.id).single();
  if (role.role !== 'owner') {
    return <p className="text-red-500">Access denied</p>;
  }

  // Assume logs table
  const { data: logs } = await supabase.from('logs').select('*');

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Logs</h1>
        {logs.map((l) => (
          <div key={l.id}>
            {l.message}
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}
