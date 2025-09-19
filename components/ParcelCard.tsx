'use client';
import { useState } from 'react';
import ReturnForm from './ReturnForm';
import PhotoUpload from './PhotoUpload';

export default function ParcelCard({ parcel }) {
  const [status, setStatus] = useState(parcel.status);

  return (
    <div className="p-4 border rounded">
      <p>{parcel.order_id}</p>
      <p>Status: {status}</p>
      <ReturnForm onSubmit={(reason) => console.log(reason)} />
      <PhotoUpload onUpload={(url) => console.log(url) } />
    </div>
  );
}
