import React from 'react';
import { Fragment } from 'react';
import { TCardsArray } from '../../types/types';
import { CardsItem } from '../CardsItem/CardsItem';
import './CardList.css';

export class CardList extends React.Component<TCardsArray> {
  constructor(props: TCardsArray) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.cards?.map((item) => {
          return (
            <Fragment key={item.id}>
              <CardsItem card={item} />
            </Fragment>
          );
        })}
      </div>
    );
  }
}
