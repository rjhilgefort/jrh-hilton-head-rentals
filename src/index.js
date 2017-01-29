import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import injectAppGlobalStyles from './css/global';

import configureStore from './config/configureStore';
import DevTools from './config/DevTools';

import App from './components/App';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
injectAppGlobalStyles();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'),
);
