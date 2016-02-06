import React from 'react';
import { IndexLink, Link } from 'react-router';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__brand'>
          <IndexLink to='/'>Microlend</IndexLink>
        </div>

        <nav className='header__nav'>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
