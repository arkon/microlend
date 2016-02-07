import React from 'react';

import auth from './Auth';

class Login extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      error: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();

    const email = this.refs.email.value;
    const pass = this.refs.pass.value;

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn) {
        return this.setState({ error: true });
      }

      this.context.router.replace('dashboard');
    });
  }

  render () {
    return (
      <div className='container'>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>

            <div>
              <label>Email address</label>
              <input ref='email' type='text' defaultValue='joe@example.com' required />
            </div>

            <div>
              <label>Password</label>
              <input ref='pass' type='password' required />
            </div>

            <button type='submit'>Log in</button>

            { this.state.error && (
              <p>Bad login information</p>
            ) }
          </form>

        </div>
      </div>
    );
  }
}

Login.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Login;
