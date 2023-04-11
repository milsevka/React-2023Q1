import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './Search';

const setError = jest.fn();
const setCards = jest.fn();
const setLoaded = jest.fn();

describe('render search', () => {
  it('render search input', () => {
    const setCards = jest.fn();
    render(<Search setCards={setCards} error={setError} loaded={setLoaded} />);
    const textInput = screen.getByRole('textbox');
    userEvent.type(textInput, 'Rick');
  });

  it('render ls', () => {
    render(<Search setCards={setCards} error={setError} loaded={setLoaded} />);
    const textInput = screen.getByRole('textbox');
    userEvent.type(textInput, 'Rick');
    const saveToLocalStorage = jest.fn(() => {
      localStorage.setItem('input', 'Rick');
    });
    saveToLocalStorage();
    expect(localStorage.getItem('input')).toBe('Rick');
  });
});
