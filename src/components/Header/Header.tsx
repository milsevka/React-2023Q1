import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Header.css';
import '../../App.css';

export const Header = () => {
  const { pathname } = useLocation();
  const currentPathName = pathname.slice(1)[0].toUpperCase() + pathname.slice(2);
  return (
    <header className="header">
      <nav className="header-link-container">
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          Home Page
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          About Page
        </NavLink>
        <NavLink to="/form" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          Form Page
        </NavLink>
      </nav>
      <h1 className="page-title">{currentPathName} Page</h1>
    </header>
  );
};
