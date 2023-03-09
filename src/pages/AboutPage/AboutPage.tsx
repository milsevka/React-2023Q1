import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

import '../HomePage/HomePage.css';
import './AbourPage.css';

export class AboutPage extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <h1>About Page</h1>
        <p className="about-title">
          Hello, this is a site with cats and Http request responses. The original pictures are
          taken from the website
          <Link to="https://http.cat/"> HTTP Cat</Link>
        </p>
        <Footer />
      </div>
    );
  }
}
