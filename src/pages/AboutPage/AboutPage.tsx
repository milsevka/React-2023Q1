import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>About Page</h1>
        <p>Hello, this is about Page</p>
        <Footer />
      </div>
    );
  }
}
