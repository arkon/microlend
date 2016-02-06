import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';

import reducers from './reducers';

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import LandingPage from './components/LandingPage/LandingPage';

import auth from './components/Auth/Auth';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Logout from './components/Auth/Logout';

import Dashboard from './components/Dashboard/Dashboard';
import Invest from './components/Dashboard/Invest';
import Borrow from './components/Borrow/Borrow';

import Password from './components/User/Password';
import Payment from './components/User/Payment';

require('./styles/styles.scss');

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(hashHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

function requireAuth (nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage} />

        <Route path='login' component={Login} />
        <Route path='register' component={Register} />
        <Route path='logout' component={Logout} />

        <Route path='dashboard' component={Dashboard} onEnter={requireAuth} />
        <Route path='invest' component={Invest} onEnter={requireAuth} />
        <Route path='borrow' component={Borrow} onEnter={requireAuth} />

        <Route path='user/payment' component={Payment} />
        <Route path='user/password' component={Password} />

        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
