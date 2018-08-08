import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App.js';
import About from './About.js';
import NoMatch from './NoMatch.js';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
