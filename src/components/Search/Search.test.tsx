import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './Search';

const setError = jest.fn();

describe('render search', () => {
  it('render search input', () => {
    const setCards = jest.fn();
    render(<Search onCards={setCards} error={setError} />);
    const textInput = screen.getByRole('textbox');
    userEvent.type(textInput, 'Rick');
  });
});
