import React from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPending, fetchFailed, openModal } from '../../store/reducer';
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
    dispatch(fetchPending());
    openModalCard(id);
  };

  const openModalCard = (id: number) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        dispatch(openModal(data));
      })
      .catch(() => {
        dispatch(fetchFailed(true));
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
