import React from 'react';

const CreditCard = (props) => {
  return (
    <div className='credit_card'>
        <p>{props.data.type}</p>
        <p>{props.data.name}</p>
        <p>{props.data.number}</p>
        <p>{props.data.month} / {props.year}</p>
        <p>{props.data.cvc}</p>
    </div>
  );
};

export default CreditCard;
