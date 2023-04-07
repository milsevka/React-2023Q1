import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { TCard } from '../../types/types';
import './Search.css';

type TSearch = {
  search: string;
  cards?: TCard[];
  loaded?: boolean;
  onLoading: Dispatch<SetStateAction<boolean>>;
  onSearch: Dispatch<SetStateAction<string>>;
  onCards: Dispatch<SetStateAction<never[]>>;
};

export const Search = (props: TSearch) => {
  const { search, onSearch, onCards, onLoading } = props;
  const [input, setInput] = useState('');

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setInput(search);
    localStorage.setItem('search', search);
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(async (res) => await res.json())
      .then(
        (result) => {
          onCards(result.results);
          onLoading(false);
        },
        (error) => {
          console.log(error.response?.data);
          onLoading(true);
        }
      );
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
