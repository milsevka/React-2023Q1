/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import './Search.css';

type TSearch = {
  setCards: Dispatch<SetStateAction<never[]>>;
  error: Dispatch<SetStateAction<boolean>>;
  loaded: Dispatch<SetStateAction<boolean>>;
};

export const Search = (props: TSearch) => {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const { setCards } = props;
  const [input, setInput] = useState(search);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setInput(search);
    localStorage.setItem('search', search);
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((res) => {
        if (res.ok) {
          props.error(false);
          props.loaded(false);
          return res.json();
        }
        if (!res.ok || res.status === 404) {
          props.loaded(true);
          props.error(true);
          throw Error(`${res.status}`);
        }
      })
      .then((data) => setCards(data.results))
      .catch((err) => console.error(`Error status: ${err} :(`));
  }, [input]);

  return (
    <Fragment>
      <form className="search-container" onSubmit={handleSubmit}>
        <input type="text" className="search-input" value={search} onChange={onValueChange} />
      </form>
    </Fragment>
  );
};
