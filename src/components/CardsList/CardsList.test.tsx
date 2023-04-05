import React from 'react';
import { render } from '@testing-library/react';

import { CardList } from './CardList';

const cardArray = [
  {
    id: 2,
    name: 'Cat',
    gender: 'female',
    image: 'src',
    species: 'meow meow meow',
  },
  {
    id: 2,
    name: 'Cat',
    gender: 'female',
    image: 'src',
    species: 'meow meow meow',
  },
];

describe('render cards', () => {
  it('render card list', () => {
    const { container } = render(<CardList cards={cardArray} />);
    expect(container.getElementsByClassName('cards-item').length).toBe(cardArray.length);
  });
});
