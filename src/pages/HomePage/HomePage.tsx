import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CardList } from '../../components/CardsList/CardList';

import '../../App.css';

import { Search } from '../../components/Search/Search';

import { RootState, useAppSelector } from '../../store/store';

import { useGetCardsQuery } from '../../store/api';
import Spinner from '../../components/Spinner/Spinner';

export const HomePage = () => {
  const { search } = useAppSelector((state: RootState) => state.cards);
  const { data: cardsList = [], isLoading, isError } = useGetCardsQuery(search);

  return (
    <>
      <Header />
      <main className="main">
        <Search />
        {isLoading && <Spinner />}
        {isError && <p>I am sorry, but there is no such card.</p>}
        {!isError && <CardList cards={cardsList} loaded={isLoading} />}
      </main>
      <Footer />
    </>
  );
};
