import React, { useState } from 'react';
import { Fragment } from 'react';
import { TCardsArray } from '../../types/types';
import { CardsItem } from '../CardsItem/CardsItem';
import { Modal } from '../Modal/Modal';
import './CardList.css';

export const CardList = (props: TCardsArray) => {
  const [modal, setModal] = useState(false);

  const handleClick = (id: number) => {
    setModal(true);
    console.log(id);
  };

  return (
    <div className="wrapper">
      {props.cards?.map((item) => {
        return (
          <Fragment key={item.id}>
            {modal && <Modal card={item} />}
            <CardsItem onClick={() => handleClick(item.id)} card={item} />
          </Fragment>
        );
      })}
    </div>
  );
};
