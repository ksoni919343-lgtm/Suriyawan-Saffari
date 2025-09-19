'use client';
import { useRef } from 'react';
import { scanBarcode } from '../lib/barcode';

export default function BarcodeScanner({ onScan }) {
  const videoRef = useRef(null);

  const handleScan = async () => {
    const code = await scanBarcode(videoRef.current);
    onScan(code);
  };

  return (
    <div>
      <video ref={videoRef} />
      <button onClick={handleScan}>Scan</button>
    </div>
  );
}
