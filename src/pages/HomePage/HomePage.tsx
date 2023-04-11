import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CardList } from '../../components/CardsList/CardList';

import '../../App.css';

import { Search } from '../../components/Search/Search';

import { useState } from 'react';

export const HomePage = () => {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [cards, setCards] = useState([]);

  return (
    <>
      <Header />
      <main className="main">
        <Search setCards={setCards} error={setError} loaded={setIsLoaded} />
        {error && <p>I am sorry, but there is no such card.</p>}
        {!error && <CardList cards={cards} loaded={isLoaded} error={error} />}
      </main>
      <Footer />
    </>
  );
};
