import React from 'react';
import { IndexLink, Link } from 'react-router';

import auth from '../Auth/Auth';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      loggedIn: auth.loggedIn(),
      chat: false
    };

    this.updateAuth = this.updateAuth.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.getChat = this.getChat.bind(this);
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

  toggleChat () {
    this.setState({
      chat: !this.state.chat
    });
  }

  getChat () {
    return this.state.chat ?
      <div className='chat__window'>
        <div className='chat__window__close' onClick={this.toggleChat}><i className='material-icons'>close</i></div>
        <iframe src='https://appear.in/microlend' width='700' height='600' frameBorder='0'></iframe>
      </div> :
      <button onClick={this.toggleChat}><i className='material-icons'>voice_chat</i> Questions? Launch Chat</button>;
  }

  render () {
    return (
      <div>
        <Header loggedIn={this.state.loggedIn} />

        <main>
          {this.props.children}
        </main>

        <Footer />

        <div className='chat'>
          { this.getChat() }
        </div>
      </div>
    );
  }
}

export default App;
