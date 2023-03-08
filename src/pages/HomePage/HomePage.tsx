import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Home Page</h1>
        <p>Hello, this is main Page</p>
        <Footer />
      </div>
    );
  }
}
