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
  const [loading, setLoading] = useState(false);

  const handleClick = (id: number) => {
    setLoading(true);
    setModalOpen(true);
    openModal(id);
  };

  const openModal = (id: number) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (res.ok) {
          setLoading(false);
          return res.json();
        }
        if (!res.ok || res.status === 404) {
          setLoading(true);
          props.error = true;
        }
      })
      .then((data) => setCard(data))
      .catch((err) => console.error(`Error status: ${err} :(`));
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
