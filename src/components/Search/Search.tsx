/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './Search.css';

type TSearch = {
  onCards: Dispatch<SetStateAction<never[]>>;
  error: Dispatch<SetStateAction<null>>;
};

export const Search = (props: TSearch) => {
  const [search, setSearch] = useState((localStorage.getItem('search') as string) || '');
  const { onCards } = props;
  const [input, setInput] = useState('');

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setInput(search);
    localStorage.setItem('search', search);
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        onCards(data.results);
      }
      props.error(data.error);
    });
  }, [input]);

  return (
    <div className="search-container">
      <input type="text" className="search-input" value={search} onChange={onValueChange} />
      <button className="search-submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};
