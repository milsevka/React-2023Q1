import React from 'react';
import { render, screen } from '@testing-library/react';

import { Footer } from '../Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

describe('render footer layout', () => {
  it('render footer', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByText('Milsevka')).toBeInTheDocument();
  });
});
