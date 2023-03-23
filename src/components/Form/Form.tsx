/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { FormCard } from './FormCard';

import '../../App.css';
import './Form.css';

type FormProps = {
  props?: null;
};
export interface CardCat {
  id: number;
  name: string;
  nameParent: string;
  birthday: string;
  color: string;
  gender: string;
  photo: File;
}
type FormType = {
  name: string;
  nameParent: string;
  birthday: string;
  checked: boolean;
  color: string;
  male: string;
  photo: string;
  cards: CardCat[];
};

export class Form extends React.Component<FormProps, FormType> {
  private name = React.createRef<HTMLInputElement>();
  private nameParent = React.createRef<HTMLInputElement>();
  private birthday = React.createRef<HTMLInputElement>();
  private color = React.createRef<HTMLSelectElement>();
  private male = React.createRef<HTMLInputElement>();
  private female = React.createRef<HTMLInputElement>();
  private photo = React.createRef<HTMLInputElement>();
  private checked = React.createRef<HTMLInputElement>();

  constructor(props: FormProps) {
    super(props);
    this.state = {
      name: '',
      nameParent: '',
      birthday: '',
      color: '',
      photo: '',
      checked: false,
      male: '',
      cards: [],
    };
  }

  onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [event.currentTarget.name]: event.currentTarget.value });
  };

  onSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    this.setState({ ...this.state, [event.currentTarget.name]: event.currentTarget.value });
  };

  onInputAgree = () => {
    this.setState({ ...this.state, checked: !this.state.checked });
  };
  onPhotoChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, photo: event.currentTarget.value.split(`\\`).pop() || '' });
  };

  handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const id = this.state.cards.length + 1;
    const name = this.name.current!.value;
    const nameParent = this.nameParent.current!.value;
    const birthday = this.birthday.current!.value;
    const color = this.color.current!.value;
    const male = this.male.current!.checked;
    const photo = this.photo.current!.files![0];
    const gender = male ? 'male' : 'female';

    const newCard = { id, name, nameParent, birthday, color, gender, photo };

    this.setState({ cards: [...this.state.cards, newCard] });
  };

  render() {
    const { name, nameParent, birthday, checked, color } = this.state;
    return (
      <main className="main">
        <form className="form-container">
          <h1 className="label-title">Add a cat card</h1>
          <div className="input-container">
            <label className="label-title">Cat name:</label>
            <input
              name="name"
              type="text"
              value={name}
              ref={this.name}
              onChange={this.onInputChange}
            />
          </div>
          <div className="input-container">
            <label className="label-title">Owner name:</label>
            <input
              name="nameParent"
              type="text"
              value={nameParent}
              ref={this.nameParent}
              onChange={this.onInputChange}
            />
          </div>
          <div className="input-container">
            <label className="label-title">Date of birth of the cat:</label>
            <input
              name="birthday"
              type="date"
              value={birthday}
              ref={this.birthday}
              onChange={this.onInputChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="select" className="label-title">
              Choose the color of the cat:
            </label>
            <select
              name="color"
              id="select"
              value={color}
              ref={this.color}
              onChange={this.onSelectChange}
            >
              <option>Meow</option>
              <option value="black">black</option>
              <option value="light">light</option>
              <option value="red">red</option>
              <option value="gray">gray</option>
              <option value="three-suited">three-suited</option>
            </select>
          </div>
          <div className="input-container">
            <div className="switch-container">
              <label className="label-title">Female</label>
              <input
                name="male"
                type="radio"
                value="female"
                ref={this.female}
                onChange={this.onInputChange}
              />
              <label className="label-title">Male</label>
              <input
                name="male"
                type="radio"
                value="male"
                ref={this.male}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="input-container">
            <label className="label-title">Upload a photo of your cat</label>
            <input type="file" name="photo" ref={this.photo} onChange={this.onPhotoChange} />
          </div>
          <div className="input-container">
            <label className="label-title">I agree to the processing of data</label>
            <input
              name="checked"
              type="checkbox"
              checked={checked}
              ref={this.checked}
              onChange={this.onInputAgree}
            />
          </div>
          <button className="button" onClick={this.handleSubmit}>
            Create card
          </button>
        </form>
        <ul className="cards-list">
          {this.state.cards.map((card, id) => {
            return <FormCard key={id} {...card} />;
          })}
        </ul>
      </main>
    );
  }
}
