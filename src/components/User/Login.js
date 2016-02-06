import React from 'react';

class Login extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='user_form'>
          <h1>Login</h1>

          <div>
            <label>Username</label>
            <input type='text' required />
          </div>

          <div>
            <label>Password</label>
            <input type='password' required />
          </div>

          <button>Log in</button>
        </div>
      </div>
    );
  }
}

export default Login;
