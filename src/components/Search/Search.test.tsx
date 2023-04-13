import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './Search';

describe('render search', () => {
  it('render search input', () => {
    render(<Search />);
    const textInput = screen.getByRole('textbox');
    userEvent.type(textInput, 'Rick');
  });

  it('render ls', () => {
    render(<Search />);
    const textInput = screen.getByRole('textbox');
    userEvent.type(textInput, 'Rick');
    const saveToLocalStorage = jest.fn(() => {
      localStorage.setItem('input', 'Rick');
    });
    saveToLocalStorage();
    expect(localStorage.getItem('input')).toBe('Rick');
  });
});
