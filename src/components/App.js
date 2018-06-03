import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Risk Dice Roller</h1>
        </header>
        <p className="App-intro">
          An app to speed up the process of rolling dice in the Risk board game.
        </p>
      </div>
    );
  }
}

export default App;
