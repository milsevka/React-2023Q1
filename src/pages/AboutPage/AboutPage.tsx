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
          Hello, this is a site with cats and Http request responses.
          <br />
          The original pictures are taken from the website
          <Link to="https://http.cat/"> HTTP Cats.</Link>
        </p>
      </main>
      <Footer />
    </>
  );
};
