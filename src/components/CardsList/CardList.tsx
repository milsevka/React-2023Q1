import React from 'react';
import { ICardList } from '../../types/types';
import { CardsItem } from '../CardsItem/CardsItem';
import './CardList.css';

export class CardList extends React.Component<ICardList> {
  constructor(props: ICardList) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          {this.props.cards?.map((item) => {
            return (
              <div key={item.id}>
                <CardsItem card={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
