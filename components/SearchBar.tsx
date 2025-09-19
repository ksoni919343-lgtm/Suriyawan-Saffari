'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/suriyawan/saffari/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}
