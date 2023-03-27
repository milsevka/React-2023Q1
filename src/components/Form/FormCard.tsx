import React from 'react';
import { TCardCat } from '../../types/types';

import '../CardsItem/CardsItem.css';

export class FormCard extends React.Component<TCardCat> {
  constructor(props: TCardCat) {
    super(props);
  }

  render() {
    const { name, nameParent, birthday, color, gender, photo } = this.props;

    return (
      <div className="cards-item">
        <img className="cards-img" src={URL.createObjectURL(photo)} />
        <p className="label-title">{name}</p>
        <p className="label-title">This is {nameParent}&apos;s cat</p>
        <p className="label-title">Date of birth: {birthday}</p>
        <p className="label-title">Color: {color}</p>
        <p className="label-title">Gender: {gender}</p>
      </div>
    );
  }
}
