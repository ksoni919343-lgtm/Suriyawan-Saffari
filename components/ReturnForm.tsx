'use client';
import { useState } from 'react';

export default function ReturnForm({ onSubmit }) {
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reason);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} />
      <button type="submit">Submit Return</button>
    </form>
  );
}
