import React from 'react';
import { TCards } from '../../types/types';

import '../CardsItem/CardsItem.css';

export const Modal = (props: TCards) => {
  const { name, image, species, gender } = props.card;

  return (
    <div className="cards-item">
      <img className="cards-img" src={image} />
      <p className="cards-name">{name}</p>
      <p className="cards-desc">{species}</p>
      <p className="cards-desc">{gender}</p>
    </div>
  );
};
