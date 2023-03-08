import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Not Found Page</h1>
        <p>Hello, this is not found Page</p>
        <Footer />
      </div>
    );
  }
}
