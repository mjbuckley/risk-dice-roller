import React from 'react';
import { Link }  from  'react-router-dom';
import AppHeader from './AppHeader';

// A 404-like page to return if an invalid url is entered
const NoMatch = () => {
  return (
    <div className="No-match">
      <AppHeader />
      <p className='No-match-text'>Sorry, but there is no page at the url that you entered. Please visit the <Link to='/'>home page</Link> to find what you're looking for.</p>
    </div>
  );
};

export default NoMatch;
