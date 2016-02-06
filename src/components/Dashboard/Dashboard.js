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

          <Grid>
            <Row>
              <Col>
                Money invested
              </Col>
              <Col>
                Money borrowed
              </Col>
            </Row>
          </Grid>
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
                <Link to='/borrow'>
                  <div className='dashboard__tile'>
                    <h3>Borrow</h3>
                    <p>Borrow in a group to get lower interest rates.</p>
                  </div>
                </Link>
              </Col>
            </Row>
          </Grid>

          <div className='dashboard__subcontent'>
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
