import { supabase } from '../../../lib/supabaseClient';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Workers() {
  const { data: workers } = await supabase.from('users').select('*').in('role', ['manager', 'shift incharge', 'leader', 'shorter', 'helper', 'delivery boy']);

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Workers</h1>
        {workers.map((w) => (
          <div key={w.id}>
            {w.email} - {w.role}
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}
