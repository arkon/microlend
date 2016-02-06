import React from 'react';

const CreditCard = (props) => {
  return (
    <div className='credit_card'>
      <div className='credit_card__side'>
        <p><strong>{props.data.type}</strong></p>

        <label>Cardholder name</label>
        <p>{props.data.name}</p>
      </div>

      <label>Number</label>
      <p>{props.data.number.replace(/^(\d{12})(\d{4}).*/, '••••••••••••••••$2')}</p>

      <label>Expiration</label>
      <p>{props.data.month} / {props.data.year}</p>

      <label>CVC code</label>
      <p>•••</p>
    </div>
  );
};

export default CreditCard;
