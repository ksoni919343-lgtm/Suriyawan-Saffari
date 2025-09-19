'use client';
import { useState } from 'react';
import { generateInvoice } from '../lib/pdf';

export default function InvoiceModal({ trackingId }) {
  const [open, setOpen] = useState(false);

  const handleGenerate = async () => {
    const pdf = await generateInvoice({ id: trackingId });
    // Download pdf
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Generate Invoice</button>
      {open && (
        <div>
          <button onClick={handleGenerate}>Download</button>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      )}
    </>
  );
}
