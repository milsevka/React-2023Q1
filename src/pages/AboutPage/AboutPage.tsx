import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

import './AboutPage.css';
import '../../App.css';

export const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <p className="about-title">
          This documentation will help you get familiar with the resources of the Rick and Morty API
          and show you how to make different queries, so that you can get the most out of it.
          <Link to="https://rickandmortyapi.com/documentation/#introduction"> Rick and Morty</Link>
        </p>
      </main>
      <Footer />
    </>
  );
};
