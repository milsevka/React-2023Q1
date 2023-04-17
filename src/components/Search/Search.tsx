import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Search.css';
import { setSearchNew } from '../../store/reducer';
import { RootState, useAppSelector } from '../../store/store';

export const Search = () => {
  const dispatch = useDispatch();
  const { search } = useAppSelector((state: RootState) => state.cards);
  const [input, setInput] = useState<string>(search);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(setSearchNew(input));
  };

  return (
    <Fragment>
      <form className="search-container" onSubmit={handleSubmit}>
        <input type="text" className="search-input" value={input} onChange={onValueChange} />
      </form>
    </Fragment>
  );
};
