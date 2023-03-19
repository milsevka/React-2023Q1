import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <ul className="header-link-container">
          <li className="header-link-item">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#1d66ab' : '#d5e1ec',
                background: isActive ? '#a0bdd880' : 'transparent',
                padding: '5px',
                borderRadius: '10px',
              })}
            >
              Home Page
            </NavLink>
          </li>
          <li className="header-link-item">
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? '#1d66ab' : '#d5e1ec',
                background: isActive ? '#a0bdd880' : 'transparent',
                padding: '5px',
                borderRadius: '10px',
              })}
            >
              About Page
            </NavLink>
          </li>
          <li className="header-link-item">
            <NavLink
              to="/form"
              style={({ isActive }) => ({
                color: isActive ? '#1d66ab' : '#d5e1ec',
                background: isActive ? '#a0bdd880' : 'transparent',
                padding: '5px',
                borderRadius: '10px',
              })}
            >
              Form Page
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}
