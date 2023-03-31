import React, { useEffect, useState } from 'react';
import './Search.css';

export const Search = () => {
  const [search, setSearch] = useState((localStorage.getItem('search') as string) || 'Http cats');

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('search', search);
  }, [search]);

  return (
    <div className="search-container">
      <input type="text" className="search-input" value={search} onChange={onValueChange} />
    </div>
  );
};
