import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" src={logo} alt="React Logo"/>
          <h1>Hello! Welcome to React.js!</h1>
        </div>
        <div className="App-intro">
          You have five minutes to create an awesome React app... Go!
        </div>
      </div>
    );
  }
}

export default App;
