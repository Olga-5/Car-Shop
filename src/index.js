import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import App from './App';
import * as constants from './constants';
import reducers from './reducers';

const initialState = { cars: constants.CARS, filters: constants.FILTERS };

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
