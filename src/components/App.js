import React from 'react';
import '../css/App.css';
import ErrorMessages from '../containers/ErrorMessages.js';
import RollForm from '../containers/RollForm.js';
import Results from '../containers/Results.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Risk Dice Roller</h1>
    </header>
    <div className="App-content">

      <div className="intro">
        <h2><FontAwesomeIcon className="dice" icon={faDice}/> Speed Up Dice Rolling In The Risk Board Game</h2>
        <p>Rolling dice in the Risk board game can take forever, especially later in the game when there are lots of armies. Speed up the game by letting the computer roll for you and getting results instantly. Try it out by entering some values in the form below, or visit the About page to learn more.</p>
      </div>

      <ErrorMessages />
      <RollForm />
      <Results />
    </div>
  </div>
);

export default App;
