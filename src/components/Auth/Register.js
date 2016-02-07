import React from 'react';

class Register extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='form'>
          <h1>Apply today</h1>

          <h2>Personal information</h2>

          <div>
            <label>First name</label>
            <input type='text' required />
          </div>

          <div>
            <label>Last name</label>
            <input type='text' required />
          </div>

          <div>
            <label>Date of birth</label>
            <input type='text' placeholder='YYYY/MM/DD' required />
          </div>

          <div>
            <label>Marital status</label>
            <select>
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
            </select>
          </div>

          <div>
            <label>Employment status</label>
            <select>
              <option>Unemployed</option>
              <option>Employed full-time</option>
              <option>Employed part-time</option>
            </select>
          </div>

          <div>
            <label>Social security number</label>
            <input type='text' placeholder='###-###-###' required />
          </div>

          <hr />

          <h2>Account information</h2>

          <div>
            <label>Email address</label>
            <input type='email' required />
          </div>

          <div>
            <label>Password</label>
            <input type='password' required />
          </div>

          <div>
            <label>Confirm Password</label>
            <input type='password' required />
          </div>

          <button>Register</button>
        </div>
      </div>
    );
  }
}

export default Register;
