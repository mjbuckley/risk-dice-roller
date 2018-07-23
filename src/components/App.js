import React from 'react';
import '../css/App.css';
import ErrorMessages from '../containers/ErrorMessages.js';
import RollInfo from '../containers/RollForm.js';
import Results from '../containers/Results.js';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Risk Dice Roller</h1>
    </header>
    <p className="App-intro">
      An app to speed up the process of rolling dice in the Risk board game.
    </p>

    <ErrorMessages />
    <RollForm />
    <Results />

  </div>
);

export default App;
