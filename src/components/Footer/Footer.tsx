import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <p className="footer-title">
          <Link to="https://github.com/milsevka">Milsevka </Link>2023
        </p>
      </footer>
    );
  }
}
