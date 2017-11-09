import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Search from './Search';

import '../styles/Header.scss';

const Header = (props) => (
    <header id="Header">
        <Search
            updateStateWithQuery={props.updateStateWithQuery}
            getPhotosFromFlickrWithQuery={props.getPhotosFromFlickrWithQuery}
        />
    </header>
);

Header.propTypes = {
    updateStateWithQuery: PropTypes.func.isRequired,
    getPhotosFromFlickrWithQuery: PropTypes.func.isRequired
};

export default Header;