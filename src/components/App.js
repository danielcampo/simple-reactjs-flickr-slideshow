import React, { Component } from 'react';

import Header from './Header';
import Spotlight from './Spotlight';
import Navigation from './Navigation';

import * as FlickrConfig from '../configs/flickr';
import { createFlickrUrlFromObject } from '../helpers/flickr_helpers';

import '../styles/App.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      activePhotoIndex: 0,
      query: ''
    }

    this.updateStateWithQuery = this.updateStateWithQuery.bind(this);
    this.getPhotosFromFlickrWithQuery = this.getPhotosFromFlickrWithQuery.bind(this);
    this.navigatePhotos = this.navigatePhotos.bind(this);
    this.updateSpotlightPhoto = this.updateSpotlightPhoto.bind(this);
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
      photos
    });
  }

  /*
    @purpose: Handles navigation functionality for spotlight navigation arrows
  */
  navigatePhotos(navDirection) {
    switch(navDirection) {
      /* Previous photo */
      case 'prev': {
        /* Check if we're not on the first image, if so do nothing. */
        if (this.state.activePhotoIndex != 0) {
          this.setState({
            activePhotoIndex: this.state.activePhotoIndex - 1
          });
        }
        break;
      }
      /* Next photo */
      default: {
        /* Check if we're not on the last image, if so do nothing. */
        if (this.state.activePhotoIndex != this.state.photos.length - 1) {
          this.setState({
            activePhotoIndex: this.state.activePhotoIndex + 1
          });
        }
      }
    }
  }

  /*
    @purpose: Updates spotlight photo based on the photo dataset number from
              selected image in navigation.
  */
  updateSpotlightPhoto(photoIndex) {
    /* Check if selected index and current index are the same, if so, do nothing */
    if (photoIndex !== this.state.activePhotoIndex) {
      this.setState({
        activePhotoIndex: parseInt(photoIndex)
      });
    }
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
        <Spotlight
          activePhotoIndex={this.state.activePhotoIndex}
          photos={this.state.photos}
          navigatePhotos={this.navigatePhotos}
        />
        <Navigation
          photos={this.state.photos}
          updateSpotlightPhoto={this.updateSpotlightPhoto}
        />
      </div>
    );
  }
}

export default App;
