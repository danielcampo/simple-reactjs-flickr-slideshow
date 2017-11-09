import React, { Component } from 'react';

import Header from './Header';
import Spotlight from './Spotlight';
import Navigation from './Navigation';

import '../styles/App.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      activePhotoUrl: '',
      query: ''
    }

    this.updateStateWithQuery = this.updateStateWithQuery.bind(this);
  }

  /*
    @purpose: Update state with the search query
  */
  updateStateWithQuery(query) {
    this.setState({
      query
    });
  }

  render() {
    return (
      <div id="App">
        <Header updateStateWithQuery={this.updateStateWithQuery} />
        <Spotlight photo={this.state.activePhotoUrl} />
        <Navigation photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
