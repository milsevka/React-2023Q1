import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Form } from './Form';
import userEvent from '@testing-library/user-event';
import { FormCard } from './FormCard';

const card = {
  id: 2,
  name: 'Kisa',
  nameParent: 'Kisa Kisa',
  birthday: '11-02-1999',
  color: 'light',
  gender: 'male',
  photo: new File([new Blob()], '../../assets/cards/100.jpg', { type: 'image/png' }),
};

describe('render form', () => {
  it('render form', () => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );
    const catName = screen.getByText(/Cat name:/);
    const ownerName = screen.getByText(/Owner name:/);
    const uploadFile = screen.getByText(/Upload a photo of your cat/)
      .nextElementSibling as HTMLInputElement;
    const agree = screen.getByText(/I agree to the processing of data/);
    const photo = new File([new Blob()], 'hello.png', { type: 'image/png' });
    const female = screen.getByText(/Female/);
    const male = screen.getByText(/Male/);
    const color = screen.getByText(/Choose the color of the cat:/);

    userEvent.click(screen.getByRole('button'));
    userEvent.type(catName, 'Kisa');
    userEvent.type(ownerName, 'Mila Kisa');
    userEvent.upload(uploadFile, photo);
    userEvent.click(agree);
    userEvent.click(female);
    userEvent.click(male);
    userEvent.click(color);
    expect(screen.getByRole('heading')).toHaveTextContent('Add a cat card');
  });

  it('Error element: not to be in the component by default', async () => {
    render(<Form />);
    expect(screen.queryByText('You must agree to the processing of data')).not.toBeInTheDocument();
  });

  it('render card', () => {
    window.URL.createObjectURL = jest.fn();
    render(<FormCard {...card} />);
    expect(screen.getByText(card.name)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${card.gender}`)).toBeInTheDocument();
    expect(screen.getByText(`Date of birth: ${card.birthday}`)).toBeInTheDocument();
    expect(screen.getByText(`This is ${card.nameParent}'s cat`)).toBeInTheDocument();
    expect(screen.getByText(`Color: ${card.color}`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
