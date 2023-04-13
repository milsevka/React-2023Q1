import React, { Fragment } from 'react';
import { TCardModal } from '../../types/types';

import '../CardsItem/CardsItem.css';
import './Modal.css';

export const Modal = (props: TCardModal) => {
  const { card, close } = props;

  return (
    <Fragment>
      <div className="card-modal-container" onClick={close}>
        <div className="cards-item-modal" onClick={(e) => e.stopPropagation()}>
          <span data-testid="closeModal" className="modal-close" onClick={close}>
            &times;
          </span>
          <img className="cards-img" src={card?.image} />
          <p className="cards-name">{card?.name}</p>
          <p className="cards-desc">Species: {card?.species}</p>
          <p className="cards-desc">Gender: {card?.gender}</p>
          <p className="cards-desc">Location: {card?.location?.name}</p>
        </div>
      </div>
    </Fragment>
  );
};
