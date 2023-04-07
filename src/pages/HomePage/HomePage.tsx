import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CardList } from '../../components/CardsList/CardList';

import '../../App.css';

// import { TCardsArray } from '../../types/types';
import { Search } from '../../components/Search/Search';

import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [search, setSearch] = useState((localStorage.getItem('search') as string) || '');
  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(async (res) => await res.json())
      .then(
        (result) => {
          setIsLoaded(false);
          setCards(result.results);
        },
        (error) => {
          setIsLoaded(true);
          console.log(error);
          // setError(error);
        }
      );
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <Search
          search={search}
          onSearch={setSearch}
          onCards={setCards}
          loaded={isLoaded}
          onLoading={setIsLoaded}
        />
        <CardList cards={cards} loaded={isLoaded} />
      </main>
      <Footer />
    </>
  );
};
