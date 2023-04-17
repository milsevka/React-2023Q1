import React from 'react';
import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('render modal', () => {
  it('render modal item', () => {
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
    expect(screen.getByTestId('closeModal')).toBeInTheDocument();
  });
});
