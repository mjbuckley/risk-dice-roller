import React from 'react';
import { Link }  from  'react-router-dom';

// Site header
const AppHeader = () => {
  return (
    <header className="App-header">
      <h1><Link to='/'>Risk Dice Roller</Link></h1>
    </header>
  );
}

export default AppHeader;
