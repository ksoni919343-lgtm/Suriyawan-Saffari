'use client';
import { GooglePayButton } from '@google-pay/button-react';

export default function PaymentGateway({ amount }) {
  return <GooglePayButton environment="TEST" paymentRequest={{ /* config */ }} onLoadPaymentData={(data) => console.log(data)} />;
}
