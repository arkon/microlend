import React from 'react';
import { IndexLink, Link } from 'react-router';

class App extends React.Component {
  render () {
    return (
      <div>
        <IndexLink to='/'>Home</IndexLink>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/dashboard'>Dashboard</Link>

        {this.props.children}
      </div>
    );
  }
}

export default App;
