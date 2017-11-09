import React, { Component } from 'react';

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

export default Header;