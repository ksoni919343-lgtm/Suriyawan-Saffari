'use client';
import { useState } from 'react';
import { z } from 'zod';

export default function SecureForm({ initialData, onSubmit, schema }) {
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    schema.parse(data);
    onSubmit(data);
  };

  return <form onSubmit={handleSubmit}>{/* fields */}</form>;
}
