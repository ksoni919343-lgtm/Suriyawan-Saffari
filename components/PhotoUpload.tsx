'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function PhotoUpload({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const { data } = await supabase.storage.from('delivery-proofs').upload('photo.jpg', file);
    onUpload(data.path);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
