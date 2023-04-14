import React from 'react';
import { TCardCat } from '../../types/types';

import '../CardsItem/CardsItem.css';

export const FormCard = (props: TCardCat) => {
  const { nameCat, nameParent, birthday, color, gender, photoFromForm } = props;

  return (
    <div className="cards-item">
      <img className="cards-img" src={photoFromForm} />
      <p className="label-title">{nameCat}</p>
      <p className="label-title">This is {nameParent}&apos;s cat</p>
      <p className="label-title">Date of birth: {birthday}</p>
      <p className="label-title">Color: {color}</p>
      <p className="label-title">Gender: {gender}</p>
    </div>
  );
};
