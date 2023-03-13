import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CardList } from '../../components/CardsList/CardList';

import './HomePage.css';
import { ICardsArray } from '../../types/types';
import { Search } from '../../components/Search/Search';

export class HomePage extends React.Component<ICardsArray> {
  constructor(props: ICardsArray) {
    super(props);
  }
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <h1>Home Page</h1>
        <Search />
        <CardList cards={this.props.cards} />
        <Footer />
      </div>
    );
  }
}
