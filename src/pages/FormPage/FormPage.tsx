import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import '../../App.css';
import { Form } from '../../components/Form/Form';

export class FormPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    );
  }
}
