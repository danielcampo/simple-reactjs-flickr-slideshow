import React, { Component } from 'react';

import { createFlickrUrlFromObject } from '../helpers/flickr_helpers';

import '../styles/Spotlight.scss';

class Spotlight extends Component {
    render() {
        if (this.props.photos.length === 0) {
            return(
                <div id="Spotlight">
                    <div className="spotlight__empty">
                        <p>Please enter a query using the search box above.</p>
                    </div>
                </div>
            );
        }
        return(
            <div id="Spotlight">
                <a
                    className="nav nav-prev"
                    href="#"
                    data-direction="prev"
                    onClick={(e) => this.props.navigatePhotos(e.target.dataset.direction)}
                >
                    &#9668;
                </a>
                <div className="spotlight__image">
                    <img src={ createFlickrUrlFromObject(this.props.photos[this.props.activePhotoIndex], 'large') } />
                </div>
                <a
                    className="nav nav-next"
                    href="#"
                    data-direction="next"
                    onClick={(e) => this.props.navigatePhotos(e.target.dataset.direction)}
                >
                    &#9658;
                </a>
            </div>
        );
    }
}

export default Spotlight;