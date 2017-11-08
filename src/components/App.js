import React, { Component } from 'react';

import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div id="App">
        <header id="Header">
          <div className="header__search">
            <input type="text" placeholder="Search..." />
          </div>
        </header>
        { /* Image Spotlight */ }
        <div id="Spotlight">
            <a className="nav nav-prev" href="#">&#9668;</a>
            <div className="spotlight__image">
              <img src="http://via.placeholder.com/1500x1000" />
            </div>
            <a className="nav nav-next" href="#">&#9658;</a>
        </div>
        { /* Image Spotlight */ }
        <div id="Navigation">

            <div className="image">
              <a href="#"><img src="http://via.placeholder.com/100x100" /></a>
            </div>
            <div className="image">
              <a href="#"><img src="http://via.placeholder.com/100x100" /></a>
            </div>
            <div className="image">
              <a href="#"><img src="http://via.placeholder.com/100x100" /></a>
            </div>
            <div className="image">
              <a href="#"><img src="http://via.placeholder.com/100x100" /></a>
            </div>
            <div className="image">
              <a href="#"><img src="http://via.placeholder.com/100x100" /></a>
            </div>
            <div className="image">
              <a href="#"><img src="http://via.placeholder.com/100x100" /></a>
            </div>
            <div className="image">
              <a href="#"><img src="http://via.placeholder.com/100x100" /></a>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
