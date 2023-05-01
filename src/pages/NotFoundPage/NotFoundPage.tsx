import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import '../../App.css';
import img from '../../assets/cards/404.jpg';

export const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="main">
        <img src={img} />
      </div>
      <Footer />
    </>
  );
};
