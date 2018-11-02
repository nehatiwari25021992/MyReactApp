import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import List  from './flowers/list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo absClass" alt="logo" />
          <p class="relClass">
            Welcome to Flower Shop !!!
          </p>
          <List season="Spring"/>
        </header>
      </div>
    );
  }
}

export default App;
