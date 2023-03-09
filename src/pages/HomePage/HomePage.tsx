import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CardList } from '../../components/CardsList/CardList';

import './HomePage.css';
import { IHomePage } from '../../types/types';

export class HomePage extends React.Component<IHomePage> {
  constructor(props: IHomePage) {
    super(props);
  }
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <h1>Home Page</h1>
        <CardList cards={this.props.cards} />
        <Footer />
      </div>
    );
  }
}
