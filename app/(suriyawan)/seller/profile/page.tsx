import { supabase } from '../../../../lib/supabaseClient';
import ErrorBoundary from '../../../../components/ErrorBoundary';

export default async function SellerProfile() {
  const { data: { session } } = await supabase.auth.getSession();
  const { data: profile } = await supabase.from('users').select('*').eq('id', session.user.id).single();

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Profile</h1>
        <p>Email: {profile.email}</p>
      </div>
    </ErrorBoundary>
  );
}
