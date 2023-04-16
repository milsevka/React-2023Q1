import React from 'react';
import { render, screen } from '@testing-library/react';

import { CardsItem } from './CardsItem';
import { Provider } from 'react-redux';
import store from '../../store/store';

const card = {
  id: 2,
  name: 'Cat',
  image: 'src',
  species: 'meow meow meow',
};

describe('render card', () => {
  it('render card item', () => {
    render(
      <Provider store={store}>
        <CardsItem card={card} />
      </Provider>
    );
    expect(screen.getByText(card.species)).toBeInTheDocument();
    expect(screen.getByText(card.name)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
