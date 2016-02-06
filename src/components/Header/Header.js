import React from 'react';
import { IndexLink, Link } from 'react-router';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__brand'>
          <IndexLink to='/'>Microlend</IndexLink>
        </div>

        <nav className='header__nav'>
          { props.loggedIn ? (
            <div>
              <Link to='/dashboard'>Dashboard</Link>
              <Link to='/logout'>Log out</Link>
            </div>
          ) : (
            <div>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </div>
          ) }
        </nav>
      </div>
    </header>
  );
};

export default Header;
