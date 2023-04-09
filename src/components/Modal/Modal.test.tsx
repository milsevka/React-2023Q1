import React from 'react';
import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';
import Spinner from '../Spinner/Spinner';

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
const modalOpen = true;

describe('render modal', () => {
  it('render modal item', () => {
    const loading = false;
    render(<Modal card={card} open={modalOpen} close={close} loaded={loading} />);
    expect(screen.getByText(`Species: ${card.species}`)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${card.gender}`)).toBeInTheDocument();
    expect(screen.getByText(`Location: ${card.location.name}`)).toBeInTheDocument();
    expect(screen.getByText(card.name)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTestId('closeModal')).toBeInTheDocument();
  });

  it('render spinner', () => {
    const loading = true;
    const modalOpen = true;
    render(<Modal card={card} open={modalOpen} close={close} loaded={loading} />);
    render(loading && <Spinner />);
  });
});
