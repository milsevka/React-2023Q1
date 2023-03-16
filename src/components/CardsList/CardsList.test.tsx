import React from 'react';
import { render } from '@testing-library/react';

import { CardList } from './CardList';

const cardArray = [
  {
    id: 2,
    name: 'Cat',
    title: '100',
    src: '',
    description: 'meow',
  },
  {
    id: 3,
    name: 'Cat',
    title: '100',
    src: '',
    description: 'meow',
  },
];

describe('render cards', () => {
  it('render card list', () => {
    const { container } = render(<CardList cards={cardArray} />);
    expect(container.getElementsByClassName('cards-item').length).toBe(cardArray.length);
  });
});
