import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartItem from './components/CartItem';
import CheckoutButton from './components/CheckoutButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <CartItem />
          <CheckoutButton />
          
        </main>
      </div>
    );
  }
}

export default App;
