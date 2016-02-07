import React from 'react';
import { Link } from 'react-router';

class BorrowTransactions extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Borrow Transactions</h1>

        <ul className='dashboard__list'>
          <li>
            <Link to='/borrowtransaction/1'>
              <div>
                <h4 className='dashboard__list__title'>Credit card bills</h4>
                <p className='dashboard__list__date'>2016-02-06</p>
                <p>Me, Alex B, Jonathan W</p>
              </div>

              <div>
                <p>Remaining:<br /><span className='dashboard__list__outstanding'>$52.50 CAD</span></p>
                <p>Originally borrowed:<br />$250.00 CAD @ 7%</p>
              </div>

              <i className='material-icons'>expand_more</i>
            </Link>
          </li>

          <li>
            <Link to='/borrowtransaction/2'>
              <div>
                <h4 className='dashboard__list__title'>Car lease bill</h4>
                <p className='dashboard__list__date'>2016-01-15</p>
                <p>Me, Adam G</p>
              </div>

              <div>
                <p>Originally borrowed:<br />$120.00 CAD @ 10%</p>
              </div>

              <i className='material-icons'>expand_more</i>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default BorrowTransactions;
