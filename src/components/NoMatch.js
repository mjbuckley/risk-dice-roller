import React from 'react';
import AppHeader from './AppHeader';

// A 404-like page to return if an invalid url is entered
const NoMatch = () => {
  return (
    <div className="No-match">
      <AppHeader />
      <p>There is no page at the url that you entered.</p>
    </div>
  );
};

export default NoMatch;
