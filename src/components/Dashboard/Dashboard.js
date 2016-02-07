import React from 'react';
import { Link } from 'react-router';

import { Row, Col } from '../Grid/Grid';

class Dashboard extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Dashboard</h1>

        <section className='dashboard__section'>
          <h2>Refinance</h2>

          <Row>
            <Col>
              <Link to='/invest'>
                <div className='dashboard__tile'>
                  <h1>Invest</h1>
                  <p>Contribute to a global pool to get promised return.</p>
                </div>
              </Link>
            </Col>

            <Col>
              <Link to='/borrow'>
                <div className='dashboard__tile'>
                  <h1>Borrow</h1>
                  <p>Borrow in a group to get lower interest rates.</p>
                </div>
              </Link>
            </Col>
          </Row>
        </section>

        <section className='dashboard__section'>
          <h2>My portfolio</h2>

          <Row>
            <Col>
              <h3>Outstanding debts</h3>
              <ul className='dashboard__list'>
                <li>
                  <Link to='/'>
                    <div>
                      <h4 className='dashboard__list__title'>Credit card bills</h4>
                      <p className='dashboard__list__date'>2016-02-06</p>
                      <p>Me, Alex B, Jonathan W</p>
                    </div>

                    <div>
                      <p>Remaining:<br /><span className='dashboard__list__outstanding'>$52.50 CAD</span></p>
                      <p>Originally borrowed:<br />$250.00  CAD@ 1.07%</p>
                    </div>

                    <i className='material-icons'>expand_more</i>
                  </Link>
                </li>
              </ul>
              <Link to='' className='dashboard__list__more'>
                See full borrowing history
              </Link>
            </Col>

            <Col>
              <h3>Recent investments</h3>
              <ul className='dashboard__list'>
                <li>
                  <Link to='/'>
                    <div>
                      <h4 className='dashboard__list__title'>$500.00 CAD @ 1.09%</h4>
                      <p className='dashboard__list__date'>2016-02-06</p>
                    </div>

                    <i className='material-icons'>expand_more</i>
                  </Link>
                </li>
              </ul>
              <Link to='' className='dashboard__list__more'>
                See full investment history
              </Link>
            </Col>
          </Row>
        </section>

        <section className='dashboard__section'>
          <h2>My account</h2>

          <p><Link to='/user/payment'>Manage payment methods</Link></p>
          <p><Link to='/user/password'>Change password</Link></p>
          <p><a href='mailto:contact@microlend.com'>Contact support</a></p>
        </section>
      </div>
    );
  }
}

export default Dashboard;
