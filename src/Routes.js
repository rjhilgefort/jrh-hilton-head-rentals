import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import App from './pages/App';
import Home from './pages/Home';
import SurfScoter from './pages/SurfScoter';
import Bradley from './pages/Bradley';
// import Maps from './pages/Maps';
// import Activities from './pages/Activities';
// import Faq from './pages/Faq';
// import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const NavLink = ({ store }) => (
  <Router history={syncHistoryWithStore(browserHistory, store)}>
    <Route path="/" component={App}>
      <IndexRedirect to="home"/>
      <Route path="home" component={Home}/>
      <Route path="surf-scoter" component={SurfScoter}/>
      <Route path="bradley" component={Bradley}/>
      {/*
      <Route path="maps" component={Maps}/>
      <Route path="activities" component={Activities}/>
      <Route path="faq" component={Faq}/>
      <Route path="contact" component={Contact}/>
      */}
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export default NavLink;
