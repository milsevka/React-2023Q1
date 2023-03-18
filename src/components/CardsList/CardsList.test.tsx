import React from 'react';
import { render } from '@testing-library/react';

import { CardList } from './CardList';

const cardArray = [
  {
    id: 2,
    name: 'Cat',
    title: '100',
    src: 'cat src',
    description: 'meow',
  },
  {
    id: 3,
    name: 'Dog',
    title: '101',
    src: 'dog src',
    description: 'woof',
  },
];

describe('render cards', () => {
  it('render card list', () => {
    const { container } = render(<CardList cards={cardArray} />);
    expect(container.getElementsByClassName('cards-item').length).toBe(cardArray.length);
  });
});
