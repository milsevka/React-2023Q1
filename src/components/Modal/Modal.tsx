import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useGetModalCardQuery } from '../../store/api';
import { openModalCards } from '../../store/reducer';
import { RootState, useAppSelector } from '../../store/store';

import '../CardsItem/CardsItem.css';
import Spinner from '../Spinner/Spinner';
import './Modal.css';

export const Modal = () => {
  const dispatch = useDispatch();
  const { idCards } = useAppSelector((state: RootState) => state.cards);
  const { data, isLoading } = useGetModalCardQuery(idCards);

  const close = () => {
    dispatch(openModalCards(false));
  };

  return (
    <Fragment>
      <div className="card-modal-container" onClick={close}>
        <div className="cards-item-modal" onClick={(e) => e.stopPropagation()}>
          {isLoading && <Spinner />}
          <span data-testid="closeModal" className="modal-close" onClick={close}>
            &times;
          </span>
          <img className="cards-img" src={data?.image} />
          <p className="cards-name">{data?.name}</p>
          <p className="cards-desc">Species: {data?.species}</p>
          <p className="cards-desc">Gender: {data?.gender}</p>
          <p className="cards-desc">Location: {data?.location?.name}</p>
        </div>
      </div>
    </Fragment>
  );
};
