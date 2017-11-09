import React, { Component } from 'react';

import Header from './Header';
import Spotlight from './Spotlight';
import Navigation from './Navigation';

import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Spotlight />
        <Navigation />
      </div>
    );
  }
}

export default App;
