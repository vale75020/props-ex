import React, { Component } from 'react';
import Contacts from './components/Contacts'
import Jokes from './components/Jokes'
import ProductMap from './components/ProductsMap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style={{color: "red", backgroundColor:"black"}}>Monsters of Rock</h1>
        <Contacts />
        <ProductMap />
        <Jokes />
      </div>
    );
  }
}

export default App;
