import React from 'react';
import { IndexLink } from 'react-router';

import auth from './Auth';

const Logout = () => {
  auth.logout();

  return (
    <div className='container'>
      <div className='form'>
        <h2>You are now logged out.</h2>

        <IndexLink to='/'>
          <button>Go home</button>
        </IndexLink>
      </div>
    </div>
  );
};

export default Logout;
