import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import { AboutPage } from './pages/AboutPage/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';
import { FormPage } from './pages/FormPage/FormPage';
import App from './App';

describe('render pages', () => {
  it('render about page', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('About Page');
  });

  it('render not found page', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Not Found Page');
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('render home page', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Home Page');
  });

  it('render form page', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Add a cat card');
  });
});

describe('testing redirect', () => {
  it('redirect to 404', () => {
    render(
      <MemoryRouter initialEntries={['/fkfkfk']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Not Found Page');
  });
});
