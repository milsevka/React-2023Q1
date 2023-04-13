import React from 'react';
import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';

const card = {
  id: 2,
  name: 'Cat',
  image: 'src',
  species: 'meow',
  gender: 'fff',
  location: {
    name: 'fff',
  },
};

describe('render modal', () => {
  it('render modal item', () => {
    render(<Modal card={card} close={close} />);
    expect(screen.getByText(`Species: ${card.species}`)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${card.gender}`)).toBeInTheDocument();
    expect(screen.getByText(`Location: ${card.location.name}`)).toBeInTheDocument();
    expect(screen.getByText(card.name)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTestId('closeModal')).toBeInTheDocument();
  });

  it('render spinner', () => {
    render(<Modal card={card} close={close} />);
  });
});
