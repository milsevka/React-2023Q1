import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import '../HomePage/HomePage.css';
import '../../App.css';

export class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="main">
          <h1 className="page-title">Not Found Page</h1>
          <img src={require('../../assets/cards/404.jpg')} />
        </div>
        <Footer />
      </>
    );
  }
}
