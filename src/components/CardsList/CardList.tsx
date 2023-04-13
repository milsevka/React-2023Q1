import React from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { getStarted, getError, openModal } from '../../store/reducer';
import { useAppSelector } from '../../store/store';
import { TCardsArray } from '../../types/types';
import { CardsItem } from '../CardsItem/CardsItem';
import { Modal } from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import './CardList.css';

export const CardList = (props: TCardsArray) => {
  const dispatch = useDispatch();
  const modalCard = useAppSelector((state) => state.cards.modalCard);

  const handleClick = (id: number) => {
    dispatch(getStarted());
    openModalCard(id);
  };

  const openModalCard = (id: number) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        if (!res.ok || res.status === 404) {
          dispatch(getError(true));
          throw Error(`${res.status}`);
        }
      })
      .then((data) => {
        dispatch(openModal(data));
      })
      .catch((err) => {
        console.error(`Error status: ${err} :(`);
      });
  };

  const close = () => {
    dispatch(openModal(null));
  };

  if (props.loaded) {
    return <Spinner />;
  }

  return (
    <div className="wrapper">
      {props.cards?.map((item) => {
        return (
          <Fragment key={item.id}>
            {modalCard && <Modal card={modalCard} close={close} />}
            <CardsItem onClick={() => handleClick(item.id)} card={item} />
          </Fragment>
        );
      })}
    </div>
  );
};
