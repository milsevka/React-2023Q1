import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Form } from './Form';
import userEvent from '@testing-library/user-event';
import { FormCard } from './FormCard';
import { Provider } from 'react-redux';
import store from '../../store/store';

const card = {
  id: 2,
  nameCat: 'Kisa',
  nameParent: 'Kisa Kisa',
  birthday: '11-02-1999',
  color: 'light',
  gender: 'male',
  photoFromForm: '../../assets/cards/100.jpg',
};

describe('render form', () => {
  it('fill and submit form', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Form />
          </BrowserRouter>
        </Provider>
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
      fireEvent.change(catName, { target: { value: 'Kisa' } });
      fireEvent.change(ownerName, { target: { value: 'Kisa Kisa' } });
      fireEvent.change(data, { target: { value: '11-02-1999' } });
      fireEvent.change(agree, { target: { checked: true } });
      fireEvent.change(male, { target: { checked: true } });
      fireEvent.change(female, { target: { checked: true } });
      userEvent.upload(uploadFile, photo);
      fireEvent.change(color, { target: { value: 'light' } });
      userEvent.click(buttonSubmit);
    });
  });

  it('Error element: not to be in the component by default', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.queryByText('You must agree to the processing of data')).not.toBeInTheDocument();
  });

  it('render card', () => {
    //window.URL.createObjectURL = jest.fn();
    render(
      <Provider store={store}>
        <FormCard {...card} />
      </Provider>
    );
    expect(screen.getByText(card.nameCat)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${card.gender}`)).toBeInTheDocument();
    expect(screen.getByText(`Date of birth: ${card.birthday}`)).toBeInTheDocument();
    expect(screen.getByText(`This is ${card.nameParent}'s cat`)).toBeInTheDocument();
    expect(screen.getByText(`Color: ${card.color}`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
