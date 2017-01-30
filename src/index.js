import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import configureStore from './config/configureStore';
import DevTools from './config/DevTools';

import App from './pages/App';
import Home from './pages/Home';
import SurfScoter from './pages/SurfScoter';
import Bradley from './pages/Bradley';
import Maps from './pages/Maps';
import Activities from './pages/Activities';
import Faq from './pages/Faq';
import NotFound from './pages/NotFound';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRedirect to="home"/>
          <Route path="home" component={Home}/>
          <Route path="surf-scoter" component={SurfScoter}/>
          <Route path="bradley" component={Bradley}/>
          <Route path="maps" component={Maps}/>
          <Route path="activities" component={Activities}/>
          <Route path="faq" component={Faq}/>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'),
);
