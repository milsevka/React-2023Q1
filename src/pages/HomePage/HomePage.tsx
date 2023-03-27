import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CardList } from '../../components/CardsList/CardList';

import '../../App.css';

import { TCardsArray } from '../../types/types';
import { Search } from '../../components/Search/Search';

export class HomePage extends React.Component<TCardsArray> {
  constructor(props: TCardsArray) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <h1 className="page-title">Home Page</h1>
          <Search />
          <CardList cards={this.props.cards} />
        </main>
        <Footer />
      </>
    );
  }
}
