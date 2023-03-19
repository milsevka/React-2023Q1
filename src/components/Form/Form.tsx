import React from 'react';

import '../../App.css';

type FormProps = {
  props?: null;
};

type FormType = {
  name: string;
  birthday: string;
  checked: boolean;
};

export class Form extends React.Component<FormProps, FormType> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      name: '',
      birthday: '',
      checked: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ ...this.state, [event.currentTarget.name]: event.currentTarget.value });
  }

  onInputAgree = () => {
    this.setState({ ...this.state, checked: !this.state.checked });
  };

  render() {
    const { name, birthday, checked } = this.state;
    return (
      <form>
        <label>
          Имя:
          <input name="name" type="text" value={name} onChange={this.onInputChange} />
        </label>
        <br />
        <label>
          День рождения:
          <input name="birthday" type="date" value={birthday} onChange={this.onInputChange} />
        </label>
        <br />
        <label>
          Чек
          <input name="checked" type="checkbox" checked={checked} onChange={this.onInputAgree} />
        </label>
      </form>
    );
  }
}
