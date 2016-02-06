import React from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from '../Grid/Grid';

class Dashboard extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Dashboard</h1>

        <p>My status</p>

        <Grid>
          <Row>
            <Col>
              <Link to='/dashboard/invest'>Invest</Link>
            </Col>
            <Col>
              <Link to='/dashboard/loan'>Loan</Link>
            </Col>
          </Row>
        </Grid>

        {this.props.children}
      </div>
    );
  }
}

export default Dashboard;
