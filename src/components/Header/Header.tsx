import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About Page</Link>
          </li>
        </ul>
      </header>
    );
  }
}
