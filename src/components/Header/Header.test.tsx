import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from '../Header/Header';
import { BrowserRouter } from 'react-router-dom';

describe('render header layout', () => {
  it('render header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getAllByText(/Home Page/i)).toHaveLength(2);
    expect(screen.getByText(/About Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Form Page/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
