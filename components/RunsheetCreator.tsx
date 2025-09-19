'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function RunsheetCreator() {
  const [parcels, setParcels] = useState([]);

  const handleCreate = async () => {
    await supabase.from('runsheets').insert({ parcels: JSON.stringify(parcels) });
  };

  return (
    <div>
      <button onClick={handleCreate}>Create Runsheet</button>
    </div>
  );
}
