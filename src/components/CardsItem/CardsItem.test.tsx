import React from 'react';
import { render, screen } from '@testing-library/react';

import { CardsItem } from './CardsItem';

const card = {
  id: 2,
  name: 'Cat',
  title: '100',
  src: 'src',
  description: 'meow meow meow',
};

describe('render card', () => {
  it('render card item', () => {
    render(<CardsItem card={card} />);
    expect(screen.getByText(card.description)).toBeInTheDocument();
    expect(screen.getByText(card.title)).toBeInTheDocument();
    expect(screen.getByText(card.name)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
