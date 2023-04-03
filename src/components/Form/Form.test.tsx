import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Form } from './Form';
import userEvent from '@testing-library/user-event';
import { FormCard } from './FormCard';

const card = {
  id: 2,
  nameCat: 'Kisa',
  nameParent: 'Kisa Kisa',
  birthday: '11-02-1999',
  color: 'light',
  gender: 'male',
  photo: new File([new Blob()], '../../assets/cards/100.jpg', { type: 'image/png' }),
};

describe('render form', () => {
  it('fill and submit form', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      );
    });
    const buttonSubmit = screen.getByText(/Create card/);
    const catName = screen.getByTestId('nameCat');
    const ownerName = screen.getByTestId('nameParent');
    const uploadFile = screen.getByTestId('photo');
    const agree = screen.getByTestId('checked');
    const male = screen.getByTestId('male');
    const female = screen.getByTestId('female');
    const color = screen.getByTestId('color');
    const data = screen.getByTestId('birthday');
    const photo = new File([new Blob()], 'hello.png', { type: 'image/png' });

    await act(async () => {
      userEvent.click(buttonSubmit);
      fireEvent.change(catName, { target: { value: 'Test' } });
      fireEvent.change(ownerName, { target: { value: 'Test Test' } });
      fireEvent.change(data, { target: { value: '1999-02-11' } });
      fireEvent.change(agree, { target: { checked: true } });
      fireEvent.change(male, { target: { checked: true } });
      fireEvent.change(female, { target: { checked: true } });
      userEvent.upload(uploadFile, photo);
      fireEvent.change(color, { target: { value: 'light' } });
    });
  });

  it('Error element: not to be in the component by default', async () => {
    render(<Form />);
    expect(screen.queryByText('You must agree to the processing of data')).not.toBeInTheDocument();
  });

  it('render card', () => {
    window.URL.createObjectURL = jest.fn();
    render(<FormCard {...card} />);
    expect(screen.getByText(card.nameCat)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${card.gender}`)).toBeInTheDocument();
    expect(screen.getByText(`Date of birth: ${card.birthday}`)).toBeInTheDocument();
    expect(screen.getByText(`This is ${card.nameParent}'s cat`)).toBeInTheDocument();
    expect(screen.getByText(`Color: ${card.color}`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should display Card for the cat created! in 1 sec', () => {
    jest.useFakeTimers();
    const { queryByText } = render(<Form />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(queryByText('Card for the cat created!')).not.toBeInTheDocument();
  });
});
