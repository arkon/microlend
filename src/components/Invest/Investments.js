import React from 'react';
import { Link } from 'react-router';

class Investments extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Investments</h1>

        <ul className='dashboard__list'>
          <li>
            <Link to='/investment/1'>
              <div>
                <h4 className='dashboard__list__title'>$50.00 CAD @ 9%</h4>
                <p className='dashboard__list__date'>2016-02-06</p>
              </div>

              <i className='material-icons'>expand_more</i>
            </Link>
          </li>

          <li>
            <Link to='/investment/1'>
              <div>
                <h4 className='dashboard__list__title'>$300.00 CAD @ 10%</h4>
                <p className='dashboard__list__date'>2016-02-01</p>
              </div>

              <i className='material-icons'>expand_more</i>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Investments;
