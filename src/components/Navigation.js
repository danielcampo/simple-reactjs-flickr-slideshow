import React from 'react';

import { createFlickrUrlFromObject } from '../helpers/flickr-helpers';

import '../styles/Navigation.scss';

const Navigation = (props) => {
    if (props.photos.length === 0) {
        return(<div id="Navigation"></div>);
    }

    return(
        <div id="Navigation">
            <div className="navigation__container">
                {
                    props.photos.map((photo,idx) => {
                        return(
                            <a
                                data-photo={idx}
                                href="#"
                                key={`photo-${idx}`}
                                onClick={(e) => props.updateSpotlightPhoto(e.target.dataset.photo)}
                            >
                                <img
                                    data-photo={idx}
                                    src={createFlickrUrlFromObject(photo)}
                                />
                            </a>
                        );
                    })
                }
            </div>
        </div>
    );

}

export default Navigation;