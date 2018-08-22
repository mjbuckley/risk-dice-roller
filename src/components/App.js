import React from 'react';
import '../css/App.css';
import AppHeader from './AppHeader';
import RollForm from '../containers/RollForm.js';
import Results from '../containers/Results.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { Link }  from  'react-router-dom';
import { Helmet } from "react-helmet";

// Home Page. The place where 99% of the app lives (other than about and 404)
const App = () => (
  <div className="App">

    <Helmet>
      <title>Speed Up Dice Rolling In Risk | Risk Dice Roller</title>
      <meta name="description" content="The Risk Dice Roller speeds up the board game Risk by letting the computer roll for you. Get rolling results right away." />
    </Helmet>


    <AppHeader />

    <div className="App-content">
      <div className="intro">
        <h2><FontAwesomeIcon className="dice" icon={faDice}/> Speed Up Dice Rolling In The Risk Board Game</h2>
        <p>Rolling dice in Risk can take forever, so speed things up by letting the computer roll for you. Try it out by entering some values in the form below, or visit the <Link to='/about'>About</Link> page to learn more.</p>
      </div>

      <RollForm />
      <Results />
    </div>
  </div>
);

export default App;
