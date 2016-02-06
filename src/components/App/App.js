import React from 'react';
import { IndexLink, Link } from 'react-router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />

        <main className='content'>
          {this.props.children}
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
