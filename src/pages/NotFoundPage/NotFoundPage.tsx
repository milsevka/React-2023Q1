import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import '../HomePage/HomePage.css';

export class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <h1>Not Found Page</h1>
        <img src={require('../../assets/cards/404.jpg')} />
        <Footer />
      </div>
    );
  }
}
