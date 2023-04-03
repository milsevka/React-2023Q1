import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CardList } from '../../components/CardsList/CardList';

import '../../App.css';

import { TCardsArray } from '../../types/types';
import { Search } from '../../components/Search/Search';

export const HomePage = (props: TCardsArray) => {
  return (
    <>
      <Header />
      <main className="main">
        <Search />
        <CardList cards={props.cards} />
      </main>
      <Footer />
    </>
  );
};
