import React from 'react';

class Invest extends React.Component {
  render () {
    return (
      <div>
        <h3>Invest</h3>

        <label>Amount ($)</label>
        <input type='number' required />

        <label>Return (%)</label>
        <input type='number' required />

        <button>Submit</button>
      </div>
    );
  }
}

export default Invest;
