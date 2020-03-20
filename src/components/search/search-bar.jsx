import React from "react";
import './search-bar.css'

// filterUsers belongs to props that are passed in. Notice how this doesn't have any logic associated. It just uses
// filterUsers to determine what to do when onChange is triggered.
const SearchBar = ({filterUsers}) => (
    <div>
        <input
            className="search"
            type="text"
            onChange={filterUsers}
        />
    </div>
);

export default SearchBar;