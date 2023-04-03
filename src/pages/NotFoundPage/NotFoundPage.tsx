import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import '../../App.css';

export const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="main">
        <img src={require('../../assets/cards/404.jpg')} />
      </div>
      <Footer />
    </>
  );
};
