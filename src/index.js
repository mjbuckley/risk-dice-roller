import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import Root from './components/Root.js';
import 'core-js/fn/number/is-integer'; // pollyfill for isInteger
import 'core-js/fn/array/find'; // pollyfill for array.find
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

// registerServiceWorker();
