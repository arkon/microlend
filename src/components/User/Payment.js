import React from 'react';

import CreditCard from '../CreditCard/CreditCard';

const cardData = [
  {
    default: true,
    data: {
      type: 'VISA',
      name: 'Joe Biden',
      number: '4132123456789012',
      month: '10',
      year: '17',
      cvc: '345'
    }
  },
  {
    default: false,
    data: {
      type: 'VISA',
      name: 'Joe Biden',
      number: '4132123456788139',
      month: '02',
      year: '18',
      cvc: '819'
    }
  }
];

class Payment extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Manage payment options</h1>

        <h2>Credit and debit cards</h2>

        <ul className='payment__cards'>
          {cardData.map((card, index) => {
            return (
              <li key={index}>
                <CreditCard data={card.data} />

                <a href='#'>Edit</a>
                <a href='#'>Remove</a>
                { card.default ? <a href='#'>This is your default card</a> : <a href='#'>Set as default</a> }
              </li>
            );
          }) }
        </ul>
      </div>
    );
  }
}

export default Payment;
