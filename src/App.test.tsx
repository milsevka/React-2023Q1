import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AboutPage } from './pages/AboutPage/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';
import { FormPage } from './pages/FormPage/FormPage';
import App from './App';

describe('render pages', () => {
  it('render about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <AboutPage />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('About Page');
  });
  it('render not found page', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Not Found Page');
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('render home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Home Page');
  });

  it('render form page', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <FormPage />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Form Page');
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
