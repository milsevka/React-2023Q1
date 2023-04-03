import React from 'react';
import { Fragment } from 'react';
import { TCardsArray } from '../../types/types';
import { CardsItem } from '../CardsItem/CardsItem';
import './CardList.css';

export const CardList = (props: TCardsArray) => {
  return (
    <div className="wrapper">
      {props.cards?.map((item) => {
        return (
          <Fragment key={item.id}>
            <CardsItem card={item} />
          </Fragment>
        );
      })}
    </div>
  );
};
