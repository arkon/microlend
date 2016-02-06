import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';

import reducers from './reducers';

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Dashboard from './components/Dashboard/Dashboard';

require('./styles/styles.scss');

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

render((
  <Provider store={store}>
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
  </Provider>
), document.getElementById('app'));
