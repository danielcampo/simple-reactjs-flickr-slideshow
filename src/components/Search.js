import React from 'react';

const Search = (props) => (
    <div className="header__search">
        <form onSubmit={(e) => props.getPhotosFromFlickrWithQuery(e)}>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => props.updateStateWithQuery(e.target.value)}
            />
        </form>
    </div>
);

export default Search;
