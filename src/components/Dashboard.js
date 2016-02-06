import React from 'react';
import { Link } from 'react-router';

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <h1>Dashboard</h1>

        <Link to='/invest'>Invest</Link>
        <Link to='/loan'>Loan</Link>
      </div>
    );
  }
}

export default Dashboard;
