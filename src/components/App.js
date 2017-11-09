import React, { Component } from 'react';

import Header from './Header';
import Spotlight from './Spotlight';
import Navigation from './Navigation';

import * as FlickrConfig from '../configs/flickr';
import { createFlickrUrlFromObject } from '../helpers/flickr-helpers';

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
    this.getPhotosFromFlickrWithQuery = this.getPhotosFromFlickrWithQuery.bind(this);
  }

  /*
    @purpose: Update state with the search query
  */
  updateStateWithQuery(query) {
    this.setState({
      query
    });
  }

  /*
    @purpose: Update state with photos returned from Flickr API request
              and set the first picture in result as active photo
  */
  updateStateWithPhotos(photos) {
    this.setState({
      photos,
      activePhotoUrl: createFlickrUrlFromObject(photos[0], 'large')
    });
  }

  /*
    @purpose: Get photos from Flickr API using fetch
  */
  getPhotosFromFlickrWithQuery(e) {
    e.preventDefault(); // Prevent form from reloading page

    if (this.state.query !== '') {
      const flickrRequestUrl = new URL(FlickrConfig.FLICKR_API_URL + '&text=' + this.state.query);
      return fetch(flickrRequestUrl)
      .then(response => response.json())
      .then(responseJson => this.updateStateWithPhotos(responseJson.photos.photo))
      .catch(err => console.error(new Error(err)))
    }
  }

  render() {
    return (
      <div id="App">
        <Header
          updateStateWithQuery={this.updateStateWithQuery}
          getPhotosFromFlickrWithQuery={this.getPhotosFromFlickrWithQuery}
        />
        <Spotlight photoUrl={this.state.activePhotoUrl} />
        <Navigation photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
