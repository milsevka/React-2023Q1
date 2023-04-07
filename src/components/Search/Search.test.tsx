import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './Search';

describe('render search', () => {
  it('render search input', () => {
    const [search, setSearch] = useState<string>('');
    const [cards, setCards] = useState<never[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    render(
      <Search
        search={'Rick'}
        onSearch={setSearch}
        onCards={setCards}
        loaded={false}
        onLoading={setLoading}
      />
    );
    const textInput = screen.getByRole('textbox');
    userEvent.type(textInput, 'Kisa');
  });
});
