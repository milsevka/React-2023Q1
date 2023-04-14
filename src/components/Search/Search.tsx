/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Search.css';
import { fetchPending, fetchSuccessful, fetchFailed } from '../../store/reducer';

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const [input, setInput] = useState(search);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(fetchPending());
    setInput(search);
    localStorage.setItem('search', search);
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        dispatch(fetchSuccessful(data.results));
        dispatch(fetchFailed(false));
      })
      .catch(() => {
        dispatch(fetchFailed(true));
      });
  }, [input]);

  return (
    <Fragment>
      <form className="search-container" onSubmit={handleSubmit}>
        <input type="text" className="search-input" value={search} onChange={onValueChange} />
      </form>
    </Fragment>
  );
};
