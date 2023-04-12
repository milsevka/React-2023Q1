import React from 'react';
import { TCards } from '../../types/types';

import './CardsItem.css';

export const CardsItem = (props: TCards) => {
  const {
    card: { name, image, species },
    onClick,
  } = props;

  return (
    <div className="cards-item" onClick={onClick}>
      <img className="cards-img" src={image} />
      <p className="cards-name">{name}</p>
      <p className="cards-desc">{species}</p>
    </div>
  );
};
