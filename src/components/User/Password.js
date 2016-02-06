import React from 'react';

class Password extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='form'>
          <h1>Change Password</h1>

          <div>
            <label>Current password</label>
            <input type='password' required />
          </div>

          <div>
            <label>New password</label>
            <input type='password' required />
          </div>

          <div>
            <label>Confirm new password</label>
            <input type='password' required />
          </div>

          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default Password;
