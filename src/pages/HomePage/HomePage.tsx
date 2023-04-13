import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CardList } from '../../components/CardsList/CardList';

import '../../App.css';

import { Search } from '../../components/Search/Search';

import { useAppSelector } from '../../store/store';

export const HomePage = () => {
  const cards = useAppSelector((state) => state.cards.cards);
  const error = useAppSelector((state) => state.cards.error);
  const loaded = useAppSelector((state) => state.cards.isLoading);

  return (
    <>
      <Header />
      <main className="main">
        <Search />
        {error && <p>I am sorry, but there is no such card.</p>}
        {!error && <CardList cards={cards} loaded={loaded} />}
      </main>
      <Footer />
    </>
  );
};
