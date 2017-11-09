import React from 'react';

import { createFlickrUrlFromObject } from '../helpers/flickr-helpers';

import '../styles/Navigation.scss';

const Navigation = (props) => {
    if (props.photos.length === 0) {
        return(<div id="Navigation"></div>);
    }

    return(
        <div id="Navigation">
            {
                props.photos.map(photo => {
                    return <a href="#"><img src={ createFlickrUrlFromObject(photo) } /></a>;
                })
            }
        </div>
    );

}

export default Navigation;