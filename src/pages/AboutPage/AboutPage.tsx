import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

import '../HomePage/HomePage.css';
import './AboutPage.css';
import '../../App.css';

export class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <h1 className="page-title">About Page</h1>
          <p className="about-title">
            Hello, this is a site with cats and Http request responses. The original pictures are
            taken from the website
            <Link to="https://http.cat/"> HTTP Cats.</Link>
          </p>
        </main>
        <Footer />
      </>
    );
  }
}
