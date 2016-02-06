import React from 'react';
import { IndexLink, Link } from 'react-router';

import auth from '../Auth/Auth';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      loggedIn: auth.loggedIn()
    };

    this.updateAuth = this.updateAuth.bind(this);
  }

  componentWillMount () {
    auth.onChange = this.updateAuth;
    auth.login();
  }

  updateAuth (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  }

  render () {
    return (
      <div>
        <Header loggedIn={this.state.loggedIn} />

        <main className='content'>
          {this.props.children}
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
