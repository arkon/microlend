import React from 'react';

class Register extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='user_form'>
          <h1>Register</h1>

          <div>
            <label>Username</label>
            <input type='text' required />
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
