import React, { Component } from 'react';

import '../styles/Spotlight.scss';

class Spotlight extends Component {
    render() {
        return(
            <div id="Spotlight">
                <a className="nav nav-prev" href="#">&#9668;</a>
                <div className="spotlight__image">
                    <img src="http://via.placeholder.com/1500x1000" />
                </div>
                <a className="nav nav-next" href="#">&#9658;</a>
            </div>
        );
    }
}

export default Spotlight;