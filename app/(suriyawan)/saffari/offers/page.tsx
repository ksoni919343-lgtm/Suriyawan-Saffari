import ErrorBoundary from '../../../../components/ErrorBoundary';

export default function Offers() {
  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Offers</h1>
        {/* Fetch offers from database or static */}
      </div>
    </ErrorBoundary>
  );
}
