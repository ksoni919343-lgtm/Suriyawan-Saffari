import HelpChat from '../../../components/HelpChat';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default function CustomerCare() {
  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Customer Care</h1>
        <HelpChat />
      </div>
    </ErrorBoundary>
  );
}
