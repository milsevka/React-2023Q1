/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { FormCard } from './FormCard';
import { TCardCat } from '../../types/types';

import '../../App.css';
import './Form.css';
import { FormProps, FormState, ErrorsTitle } from '../../types/types';

export class Form extends React.Component<FormProps, FormState> {
  private form = React.createRef<HTMLFormElement>();
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
      cards: [],
      validate: false,
      modal: false,
    };
  }

  errors: ErrorsTitle = {
    name: false,
    nameParent: false,
    birthday: false,
    color: false,
    photo: false,
    gender: false,
    checked: false,
  };

  formSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    const id = this.state.cards.length + 1;
    const name = this.name.current!.value;
    const nameParent = this.nameParent.current!.value;
    const birthday = this.birthday.current!.value;
    const color = this.color.current!.value;
    const male = this.male.current!.checked;
    const female = this.female.current!.checked;
    const checked = this.checked.current!.checked;
    const photo = this.photo.current!.files![0];
    const gender = this.checkGender(male, female);
    const agree = checked ? 'agree' : '';

    const newCard = { id, name, nameParent, birthday, color, gender, photo };

    this.validate('name', name);
    this.validate('nameParent', nameParent);
    this.validate('birthday', birthday);
    this.validate('color', color);
    this.validate('gender', gender);
    this.validatePhoto(photo);
    this.validate('checked', agree);

    this.validateTrue(newCard);
  };

  validateTrue = (card: TCardCat) => {
    const values = Object.values(this.errors);
    if (values.every((elem) => !elem)) {
      this.setState({ validate: true });
      this.setState({ cards: [...this.state.cards, card] });
      this.openModal();
      this.form.current!.reset();
    } else {
      this.setState({ validate: false });
    }
  };

  openModal = () => {
    this.setState({ modal: true });
    setTimeout(() => {
      this.setState({ modal: false });
    }, 1000);
  };

  validatePhoto = (file: File) => {
    this.errors.photo = file ? false : true;
  };

  checkGender = (male: boolean, female: boolean) => {
    let gender = '';
    if (male) {
      gender = 'male';
    } else if (female) {
      gender = 'female';
    } else {
      gender = '';
    }
    return gender;
  };

  validate = (nameCase: string, testString: string) => {
    switch (nameCase) {
      case 'name': {
        const nameReg = /^([A-ZА-ЯЁ])/;
        this.errors.name = nameReg.test(testString) ? false : true;
        break;
      }
      case 'nameParent': {
        const nameParentReg = /^[А-ЯЁA-Z][а-яёa-z]+ [А-ЯЁA-Z][а-яёa-z]+$/g;
        this.errors.nameParent = nameParentReg.test(testString) ? false : true;
        break;
      }
      case 'birthday': {
        const resultDate = Number(testString.split('-')[0]);
        this.errors.birthday = resultDate < 2023 && testString ? false : true;
        break;
      }
      case 'color': {
        this.errors.color = testString !== 'choose one' ? false : true;
        break;
      }
      case 'gender': {
        this.errors.gender = testString ? false : true;
        break;
      }
      case 'checked': {
        this.errors.checked = testString ? false : true;
        break;
      }
    }
  };

  render() {
    return (
      <main className="main">
        <form className="form-container" ref={this.form}>
          <h1 className="label-title">Add a cat card</h1>
          <div className="input-container">
            <label className="label-title">Cat name:</label>
            <input name="name" type="text" ref={this.name} />
            {this.errors.name && (
              <p className="error-title">
                Please, consider that pet&apos;s name should start with a capital letter
              </p>
            )}
          </div>
          <div className="input-container">
            <label className="label-title">Owner name:</label>
            <input name="nameParent" type="text" ref={this.nameParent} />
            {this.errors.nameParent && (
              <p className="error-title">
                Please consider that your name must contain at least two words, each at least 2
                characters long and they should start with a capital letter
              </p>
            )}
          </div>
          <div className="input-container">
            <label className="label-title">Date of birth of the cat:</label>
            <input name="birthday" type="date" ref={this.birthday} />
            {this.errors.birthday && (
              <p className="error-title">
                Please fill in the date correctly. Year of birth cannot be more than 2023.
              </p>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="select" className="label-title">
              Choose the color of the cat:
            </label>
            <select name="color" id="select" ref={this.color}>
              <option defaultValue={'choose one'}>choose one</option>
              <option value="black">black</option>
              <option value="light">light</option>
              <option value="red">red</option>
              <option value="gray">gray</option>
              <option value="three-suited">three-suited</option>
            </select>
            {this.errors.color && (
              <p className="error-title">Please choose the color of the cat.</p>
            )}
          </div>
          <div className="input-container">
            <div className="switch-container">
              <label className="label-title">Female</label>
              <input name="male" type="radio" value="female" ref={this.female} />
              <label className="label-title">Male</label>
              <input name="male" type="radio" value="male" ref={this.male} />
            </div>
            {this.errors.gender && (
              <p className="error-title">Please choose the gender of the cat.</p>
            )}
          </div>
          <div className="input-container">
            <label className="label-title">Upload a photo of your cat</label>
            <input type="file" name="photo" ref={this.photo} />
            {this.errors.photo && (
              <p className="error-title">You must upload a photo of your cat</p>
            )}
          </div>
          <div className="input-container">
            <label className="label-title">I agree to the processing of data</label>
            <input name="checked" type="checkbox" ref={this.checked} />
            {this.errors.checked && (
              <p className="error-title">You must agree to the processing of data</p>
            )}
          </div>
          <button className="button" onClick={this.formSubmit}>
            Create card
          </button>
        </form>
        {this.state.modal && <p className="label-title">Card for the cat created!</p>}
        <ul className="cards-list">
          {this.state.cards.map((card, id) => {
            return <FormCard key={id} {...card} />;
          })}
        </ul>
      </main>
    );
  }
}
