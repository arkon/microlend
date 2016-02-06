import React from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from '../Grid/Grid';

class Dashboard extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Dashboard</h1>

        <section className='dashboard__section'>
          <h2>My status</h2>

          <p>Hello world</p>
        </section>

        <section className='dashboard__section'>
          <h2>Refinance</h2>

          <Grid>
            <Row>
              <Col>
                <Link to='/dashboard/invest'>
                  <div className='dashboard__tile'>
                    <h3>Invest</h3>
                    <p>Contribute to a global pool to get promised return.</p>
                  </div>
                </Link>
              </Col>
              <Col>
                <Link to='/dashboard/borrow'>
                  <div className='dashboard__tile'>
                    <h3>Borrow</h3>
                    <p>Borrow in a group to get lower interest rates.</p>
                  </div>
                </Link>
              </Col>
            </Row>
          </Grid>

          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Dashboard;
