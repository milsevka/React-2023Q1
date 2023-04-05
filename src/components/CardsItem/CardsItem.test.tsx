import React from 'react';
import { render, screen } from '@testing-library/react';

import { CardsItem } from './CardsItem';

const card = {
  id: 2,
  name: 'Cat',
  gender: 'female',
  image: 'src',
  species: 'meow meow meow',
};

describe('render card', () => {
  it('render card item', () => {
    render(<CardsItem card={card} />);
    expect(screen.getByText(card.species)).toBeInTheDocument();
    expect(screen.getByText(card.gender)).toBeInTheDocument();
    expect(screen.getByText(card.name)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
