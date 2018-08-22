import React from 'react';
import { Link }  from  'react-router-dom';
import { Helmet } from "react-helmet";
import AppHeader from './AppHeader';

// A 404-like page to return if an invalid url is entered. Added noindex in robots meta because
// there's no reason an error page should show up in a search result.
const NoMatch = () => {
  return (
    <div className="No-match">

      <Helmet>
        <title>Bad URL | Risk Dice Roller</title>
        <meta name="description" content="Error page. No page exists for the URL entered." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <AppHeader />
      <p className='No-match-text'>Sorry, but there is no page at the url that you entered. Please visit the <Link to='/'>home page</Link> to find what you're looking for.</p>
    </div>
  );
};

export default NoMatch;
