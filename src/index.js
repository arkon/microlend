import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Dashboard from './components/Dashboard/Dashboard';

require('./styles/styles.scss');

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LandingPage} />
      <Route path='login' component={Login} />
      <Route path='register' component={Register} />
      <Route path='dashboard' component={Dashboard}>
        <Route path='invest' component={Login} />
        <Route path='loan' component={Register} />
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.querySelector('main'));
