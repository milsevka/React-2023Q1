import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AboutPage } from './pages/AboutPage/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';
import { FormPage } from './pages/FormPage/FormPage';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

test('render about page', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/about']}>
        <AboutPage />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByRole('heading')).toHaveTextContent('About Page');
});

test('render not found page', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/404']}>
        <NotFoundPage />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByRole('heading')).toHaveTextContent('Not Found Page');
  expect(screen.getByRole('img')).toBeInTheDocument();
});

test('render home page', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByRole('heading')).toHaveTextContent('Home Page');
});

test('render form page', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/form']}>
        <FormPage />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByRole('heading')).toHaveTextContent('Form Page');
});

test('testing redirect', () => {
  it('redirect to 404', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/fkfkfk']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Not Found Page');
  });
});
