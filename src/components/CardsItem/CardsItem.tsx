import React from 'react';
import { TCards } from '../../types/types';

import './CardsItem.css';

export class CardsItem extends React.Component<TCards> {
  constructor(props: TCards) {
    super(props);
  }

  render() {
    const { name, title, src, description } = this.props.card;

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
  }
}
