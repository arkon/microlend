import React from 'react';
import { Link } from 'react-router';

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <h1>Dashboard</h1>

        <Link to='/dashboard/invest'>Invest</Link>
        <Link to='/dashboard/borrow'>Borrow</Link>

        {this.props.children}
      </div>
    );
  }
}

export default Dashboard;
