import React from 'react';
import { IndexLink } from 'react-router';

import auth from './Auth';

const Logout = () => {
  auth.logout();

  return (
    <div className='container'>
      <h2>You are now logged out.</h2>

      <IndexLink to='/'>Go home</IndexLink>
    </div>
  );
};

export default Logout;
