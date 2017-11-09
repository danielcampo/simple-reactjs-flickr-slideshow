import React from 'react';

const Search = (props) => (
    <div className="header__search">
        <form>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => props.updateStateWithQuery(e.target.value)}
            />
        </form>
    </div>
);

export default Search;
