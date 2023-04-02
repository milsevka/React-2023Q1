import React, { useState } from 'react';
import { FormCard } from './FormCard';

import '../../App.css';
import './Form.css';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { TCardCat } from '../../types/types';

export const Form = () => {
  const regName = /^([A-ZА-ЯЁ])/;
  const regParentName = /^[А-ЯЁA-Z][а-яёa-z]+ [А-ЯЁA-Z][а-яёa-z]+$/g;
  const isBirthdayTrue = (date: string) => Date.now() > new Date(date).getTime();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const [cards, setCards] = useState<TCardCat[]>([]);
  const [creationTitle, setcreationTitle] = useState(false);

  const openCreationTitle = () => {
    setcreationTitle(true);
    setTimeout(() => {
      setcreationTitle(false);
      reset();
    }, 1000);
  };

  type FormInputs = {
    nameCat: string;
    nameParent: string;
    birthday: string;
    color: string;
    male: string;
    photo: FileList;
    checked: boolean;
  };

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log(data);
    const { nameParent, birthday, color, male, nameCat } = data;
    const photo = data.photo[0];
    const newCard = { nameCat, nameParent, birthday, color, male, photo };
    setCards([...cards, newCard]);
    openCreationTitle();
  };

  return (
    <main className="main">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <p className="label-title">Add a cat card</p>
        <div className="input-container">
          <label className="label-title">Cat name:</label>
          <input
            {...register('nameCat', { required: true, pattern: regName })}
            defaultValue={''}
            name="nameCat"
            type="text"
            data-testid="nameCat"
          />
          {errors.nameCat && (
            <p className="error-title">
              Please, consider that pet&apos;s name should start with a capital letter
            </p>
          )}
        </div>
        <div className="input-container">
          <label className="label-title">Owner name:</label>
          <input
            {...register('nameParent', { required: true, minLength: 2, pattern: regParentName })}
            defaultValue={''}
            name="nameParent"
            type="text"
            data-testid="nameParent"
          />
          {errors.nameParent && (
            <p className="error-title">
              Please consider that your name must contain at least two words and they should start
              with a capital letter
            </p>
          )}
        </div>
        <div className="input-container">
          <label className="label-title">Date of birth of the cat:</label>
          <input
            {...register('birthday', { required: true, validate: isBirthdayTrue })}
            defaultValue={''}
            name="birthday"
            type="date"
            data-testid="birthday"
          />
          {errors.birthday && (
            <p className="error-title">
              Please fill in the date correctly. Year of birth cannot be more than 2023.
            </p>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="select" className="label-title">
            Choose the color of the cat:
          </label>
          <select
            {...register('color', { required: true })}
            name="color"
            id="select"
            defaultValue=""
            data-testid="color"
          >
            <option value="" disabled>
              choose one
            </option>
            <option value="black">black</option>
            <option value="light">light</option>
            <option value="red">red</option>
            <option value="gray">gray</option>
            <option value="three-suited">three-suited</option>
          </select>
          {errors.color && <p className="error-title">Please choose the color of the cat.</p>}
        </div>
        <div className="input-container">
          <div className="switch-container">
            <label className="label-title">Female</label>
            <input
              {...register('male', { required: true })}
              defaultChecked={false}
              name="male"
              type="radio"
              value="female"
              data-testid="female"
            />
            <label className="label-title">Male</label>
            <input
              {...register('male', { required: true })}
              defaultChecked={false}
              name="male"
              type="radio"
              value="male"
              data-testid="male"
            />
          </div>
          {errors.male && <p className="error-title">Please choose the gender of the cat.</p>}
        </div>
        <div className="input-container">
          <label className="label-title">Upload a photo of your cat</label>
          <input
            {...register('photo', { required: true })}
            defaultValue={''}
            type="file"
            name="photo"
            data-testid="photo"
          />
          {errors.photo && <p className="error-title">You must upload a photo of your cat</p>}
        </div>
        <div className="input-container">
          <label className="label-title">I agree to the processing of data</label>
          <input
            {...register('checked', { required: true })}
            defaultChecked={false}
            name="checked"
            type="checkbox"
            data-testid="checked"
          />
          {errors.checked && (
            <p className="error-title">You must agree to the processing of data</p>
          )}
        </div>
        <button className="button" type="submit">
          Create card
        </button>
      </form>
      {creationTitle && <p className="label-title">Card for the cat created!</p>}
      <ul className="cards-list">
        {cards.map((card, id) => {
          return <FormCard key={id} {...card} />;
        })}
      </ul>
    </main>
  );
};
