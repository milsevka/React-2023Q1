import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Header.css';
import '../../App.css';
type PageType = {
  [key: string]: string;
};

const PageName: PageType = {
  '/': 'Home Page',
  '/about': 'About Page',
  '/form': 'Form Page',
  '/404': 'Not Found Page',
};

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <nav className="header-link-container">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          Home Page
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          About Page
        </NavLink>
        <NavLink to="/form" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          Form Page
        </NavLink>
      </nav>
      <h1 className="page-title">{PageName[pathname]}</h1>
    </header>
  );
};
