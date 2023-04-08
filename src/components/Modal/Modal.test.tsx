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
  });

  it('render spinner', () => {
    const loading = true;
    render(loading && <Spinner />);
    expect(screen.queryByText(/Species: /)).not.toBeInTheDocument();
    expect(screen.queryByText(/Gender: /)).not.toBeInTheDocument();
    expect(screen.queryByText(/Location: /)).not.toBeInTheDocument();
  });
});
