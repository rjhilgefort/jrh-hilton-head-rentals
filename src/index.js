import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import configureStore from './config/configureStore';
import DevTools from './config/DevTools';

import Routes from './Routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Routes store={store} />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'),
);
