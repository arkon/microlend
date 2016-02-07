import React from 'react';

class BorrowTransaction extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Borrow Transaction</h1>

        <dl>
          <dd>Name</dd>
          <dt>Credit card bills</dt>

          <dd>Date</dd>
          <dt>2016-02-06</dt>

          <dd>Co-signers</dd>
          <dt>Me, Alex B, Jonathan W</dt>

          <dd>Remaining amount</dd>
          <dt><span className='dashboard__list__outstanding'>$52.50 CAD</span></dt>

          <dd>Originally borrowed</dd>
          <dt>$250.00 CAD @ 7%</dt>
        </dl>
      </div>
    );
  }
}

export default BorrowTransaction;
