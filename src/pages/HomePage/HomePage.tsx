import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CardList } from '../../components/CardsList/CardList';

import '../../App.css';

import { Search } from '../../components/Search/Search';

import { useAppSelector } from '../../store/store';

export const HomePage = () => {
  const { cards, error, isLoading } = useAppSelector((state) => state.cards);

  return (
    <>
      <Header />
      <main className="main">
        <Search />
        {error && <p>I am sorry, but there is no such card.</p>}
        {!error && <CardList cards={cards} loaded={isLoading} />}
      </main>
      <Footer />
    </>
  );
};
