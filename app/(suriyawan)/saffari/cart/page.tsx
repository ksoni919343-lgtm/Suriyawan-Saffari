'use client';
import { useCart } from '../../../../contexts/CartContext';
import ErrorBoundary from '../../../../components/ErrorBoundary';

export default function Cart() {
  const { cart } = useCart();

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-warmBrown">Cart</h1>
        {cart.map((item) => (
          <div key={item.id}>
            {item.name} - ₹{item.price}
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}
