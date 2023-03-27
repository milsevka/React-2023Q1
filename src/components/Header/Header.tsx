import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

export class Header extends React.Component {
  active = {
    color: '#1d66ab',
    background: '#a0bdd880',
    padding: '5px',
    borderRadius: '10px',
  };
  inactive = {
    color: '#d5e1ec',
    background: 'transparent',
    padding: '5px',
    borderRadius: '10px',
  };
  render() {
    return (
      <header className="header">
        <nav className="header-link-container">
          <NavLink to="/" style={({ isActive }) => (isActive ? this.active : this.inactive)}>
            Home Page
          </NavLink>
          <NavLink to="/about" style={({ isActive }) => (isActive ? this.active : this.inactive)}>
            About Page
          </NavLink>
          <NavLink to="/form" style={({ isActive }) => (isActive ? this.active : this.inactive)}>
            Form Page
          </NavLink>
        </nav>
      </header>
    );
  }
}
