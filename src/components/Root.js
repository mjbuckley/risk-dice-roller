import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App.js';
import About from './About.js';
import NoMatch from './NoMatch.js';
import ScrollToTop from './ScrollToTop.js';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </ScrollToTop>
    </Router>
  </Provider>
);

export default Root;
