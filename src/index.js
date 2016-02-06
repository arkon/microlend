import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';

require('./styles/styles.scss');

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LandingPage} />
      <Route path='login' component={Login} />
      <Route path='register' component={Register} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.querySelector('main'));
