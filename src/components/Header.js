import React, { Component } from 'react';

import Search from './Search';

import '../styles/Header.scss';

class Header extends Component {
    render() {
        return(
            <header id="Header">
                <Search />
            </header>
        );
    }
};

export default Header;