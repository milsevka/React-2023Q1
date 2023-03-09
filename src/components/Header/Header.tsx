import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <ul className="header-link-container">
          <li className="header-link-item">
            <Link to="/">Home Page</Link>
          </li>
          <li className="header-link-item">
            <Link to="/about">About Page</Link>
          </li>
        </ul>
      </header>
    );
  }
}
