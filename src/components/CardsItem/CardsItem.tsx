import React from 'react';
import { ICards } from '../../types/types';

import './CardsItem.css';

export class CardsItem extends React.Component<ICards> {
  constructor(props: ICards) {
    super(props);
  }

  render() {
    const { name, title, src, description } = this.props.card;

    return (
      <div className="cards-item">
        <img className="cards-img" src={`${src}`} />
        <div className="title-container">
          <h2 className="cards-title">{title}</h2>
          <h2 className="cards-name">{name}</h2>
        </div>
        <p className="cards-desc">{description}</p>
      </div>
    );
  }
}
