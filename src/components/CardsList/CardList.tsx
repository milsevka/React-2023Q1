import React from 'react';
import { ICardsArray } from '../../types/types';
import { CardsItem } from '../CardsItem/CardsItem';
import './CardList.css';

export class CardList extends React.Component<ICardsArray> {
  constructor(props: ICardsArray) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.cards?.map((item) => {
          return (
            <div key={item.id}>
              <CardsItem card={item} />
            </div>
          );
        })}
      </div>
    );
  }
}
