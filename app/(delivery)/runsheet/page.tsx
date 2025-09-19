import { supabase } from '../../../lib/supabaseClient';
import RunsheetCreator from '../../../components/RunsheetCreator';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default async function Runsheet() {
  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Runsheet</h1>
        <RunsheetCreator />
      </div>
    </ErrorBoundary>
  );
}
