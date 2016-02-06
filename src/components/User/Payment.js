import React from 'react';

import CreditCard from '../CreditCard/CreditCard';

class Payment extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Manage payment options</h1>

        <h2>Credit and debit cards</h2>

        <ul className='payment__cards'>
          <li>
            <CreditCard data={{
              type: 'VISA',
              name: 'Joe Biden',
              number: '4132123456789012',
              month: '10',
              year: '17',
              cvc: '345'
            }} />

            Edit
            Remove
            Set as default
          </li>
        </ul>
      </div>
    );
  }
}

export default Payment;
