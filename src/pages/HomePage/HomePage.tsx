import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CardList } from '../../components/CardsList/CardList';

import '../../App.css';

import { Search } from '../../components/Search/Search';

import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        setIsLoaded(false);
        setCards(data.results);
      } else {
        setIsLoaded(true);
        setError(data.error);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <Search onCards={setCards} error={setError} />
        {error}
        {!error && <CardList cards={cards} loaded={isLoaded} />}
      </main>
      <Footer />
    </>
  );
};
