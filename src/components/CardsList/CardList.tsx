import React, { useState } from 'react';
import { Fragment } from 'react';
import { TCardsArray, TCard } from '../../types/types';
import { CardsItem } from '../CardsItem/CardsItem';
import { Modal } from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import './CardList.css';

export const CardList = (props: TCardsArray) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [card, setCard] = useState<TCard | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = (id: number) => {
    setLoading(true);
    setModalOpen(true);
    openModal(id);
  };

  const openModal = (id: number) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        setCard(data);
        setLoading(false);
      } else {
        setLoading(true);
        setError(data.error);
      }
    });
  };

  const close = () => {
    setModalOpen(false);
    setCard(null);
  };

  if (props.loaded) {
    return <Spinner />;
  }
  return (
    <div className="wrapper">
      {error}
      {props.cards?.map((item) => {
        return (
          <Fragment key={item.id}>
            <Modal card={card} open={modalOpen} close={close} loaded={loading} />
            <CardsItem onClick={() => handleClick(item.id)} card={item} />
          </Fragment>
        );
      })}
    </div>
  );
};
