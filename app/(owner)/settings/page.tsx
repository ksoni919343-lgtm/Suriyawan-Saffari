import { supabase } from '../../../lib/supabaseClient';
import SecureForm from '../../../components/SecureForm';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Settings() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return <p className="text-red-500">Not authenticated</p>;
  }
  const { data: role } = await supabase.from('roles').select('role').eq('user_id', session.user.id).single();
  if (role.role !== 'owner') {
    return <p className="text-red-500">Access denied</p>;
  }

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Settings</h1>
        <SecureForm initialData={{}} onSubmit={(data) => console.log(data)} /> 
      </div>
    </ErrorBoundary>
  );
}
