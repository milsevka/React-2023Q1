import React from 'react';
import { TCards } from '../../types/types';

import './CardsItem.css';

export const CardsItem = (props: TCards) => {
  const { name, title, src, description } = props.card;

  return (
    <div className="cards-item">
      <img className="cards-img" src={src} />
      <div className="title-container">
        <h2 className="cards-title">{title}</h2>
        <p className="cards-name">{name}</p>
      </div>
      <p className="cards-desc">{description}</p>
    </div>
  );
};
