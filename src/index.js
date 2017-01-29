import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import configureStore from './config/configureStore';
import DevTools from './config/DevTools';

import App from './components/App';
import Home from './components/Home';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          {/* <Route path="surf-scoter" component={}/> */}
          {/* <Route path="bradley" component={}/> */}
          {/* <Route path="maps" component={}/> */}
          {/* <Route path="activities" component={}/> */}
          {/* <Route path="faq" component={}/> */}
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'),
);
