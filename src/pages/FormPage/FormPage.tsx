import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import '../../App.css';
import { Form } from '../../components/Form/Form';

export const FormPage = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
};
