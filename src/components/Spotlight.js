import React, { Component } from 'react';

import '../styles/Spotlight.scss';

class Spotlight extends Component {
    render() {
        if (this.props.photoUrl === '') {
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
                <a className="nav nav-prev" href="#">&#9668;</a>
                <div className="spotlight__image">
                    <img src={this.props.photoUrl} />
                </div>
                <a className="nav nav-next" href="#">&#9658;</a>
            </div>
        );
    }
}

export default Spotlight;