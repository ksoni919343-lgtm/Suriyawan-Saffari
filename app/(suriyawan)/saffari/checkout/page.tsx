'use client';
import { useCart } from '../../../../contexts/CartContext';
import PaymentGateway from '../../../../components/PaymentGateway';
import ErrorBoundary from '../../../../components/ErrorBoundary';

export default function Checkout() {
  const { cart } = useCart();

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Checkout</h1>
        <PaymentGateway amount={cart.reduce((sum, item) => sum + item.price, 0)} />
      </div>
    </ErrorBoundary>
  );
}
