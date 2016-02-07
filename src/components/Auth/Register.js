import React from 'react';

class Register extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='form'>
          <h1>Apply today</h1>

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
