import { useCallback } from 'react';

export const usePayments = () => {
  const processPayment = useCallback(async (data) => {
    const res = await fetch('/api/payments/process', { method: 'POST', body: JSON.stringify(data) });
    return await res.json();
  }, []);

  return processPayment;
};
