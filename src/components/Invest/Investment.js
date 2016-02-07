import React from 'react';

class Investment extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Investment</h1>

        <dl>
          <dd>Amount invested</dd>
          <dt>$50.00 CAD @ 9%</dt>

          <dd>Date invested</dd>
          <dt>2016-02-06</dt>

          <dd>Date fulfilled</dd>
          <dt>2016-02-10</dt>
        </dl>
      </div>
    );
  }
}

export default Investment;
