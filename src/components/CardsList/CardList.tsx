import React from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { setIdCards, openModalCards } from '../../store/reducer';
import { useAppSelector } from '../../store/store';
import { TCardsArray } from '../../types/types';
import { CardsItem } from '../CardsItem/CardsItem';
import { Modal } from '../Modal/Modal';

import './CardList.css';

export const CardList = (props: TCardsArray) => {
  const dispatch = useDispatch();
  const { isModalOpen } = useAppSelector((state) => state.cards);

  const handleClick = (id: number) => {
    dispatch(setIdCards(`${id}`));
    dispatch(openModalCards(true));
  };

  return (
    <div className="wrapper">
      {props.cards?.map((item) => {
        return (
          <Fragment key={item.id}>
            <CardsItem onClick={() => handleClick(item.id)} card={item} />
          </Fragment>
        );
      })}
      {isModalOpen && <Modal />}
    </div>
  );
};
