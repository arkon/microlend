import React from 'react';
import { Link } from 'react-router';

import { Row, Col } from '../Grid/Grid';

const LandingPage = (props) => {
  return (
    <div>
      <section className='landing_page__hero'>
        <div className='container'>
          <h1>Get to the other side, together.</h1>
          <p>Fixed rates from 5% - 15% with no additional fees.</p>
          <p>Borrow in groups for better rates, or help others by investing.</p>

          <Link to='/register'>
            <button className='button--teal'>Apply today</button>
          </Link>
        </div>
      </section>

      <section className='landing_page__row'>
        <div className='container'>
          <h1>Invest in groups</h1>

          <Row className='landing_page__features'>
            <Col>
              <i className='material-icons'>attach_money</i>
              <h2>Add money to the pool</h2>
              <p>Contribute to a global pool of loan money.</p>
            </Col>
            <Col>
              <i className='material-icons'>add</i>
              <h2>Specify the rate of return</h2>
              <p>Choose how much you want to charge for interest.</p>
            </Col>
            <Col>
              <i className='material-icons'>timeline</i>
              <h2>Grow your money</h2>
              <p>Get your money back, with the added interest.</p>
            </Col>
          </Row>
        </div>
      </section>

      <section className='landing_page__row landing_page__row--alt'>
        <div className='container'>
          <h1>Borrow as groups</h1>

          <Row className='landing_page__features'>
            <Col>
              <i className='material-icons'>group</i>
              <h2>Get a group of friends</h2>
              <p>More people = lower interest rates.</p>
            </Col>
            <Col>
              <i className='material-icons'>credit_card</i>
              <h2>Borrow money</h2>
              <p>Easily get a loan.</p>
            </Col>
            <Col>
              <i className='material-icons'>assignment_return</i>
              <h2>Pay it back</h2>
              <p>Improve your score and get lower rates as you pay off loans on time.</p>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
