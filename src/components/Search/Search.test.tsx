import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './Search';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('render search', () => {
  it('render search input', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const textInput = screen.getByRole('textbox');
    userEvent.type(textInput, 'Rick');
    expect(textInput).toBeInTheDocument();
  });
});
