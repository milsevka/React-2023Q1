import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">
        <Link to="https://github.com/milsevka">Milsevka </Link>2023
      </p>
    </footer>
  );
};
