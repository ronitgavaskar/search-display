import React from "react";
import './display.css'

const Display = ({searchedUsers}) => (
    <div className="display">
        {
            searchedUsers.map(user =>
                <p>{user.name}</p>
            )
        }
    </div>
);

export default Display;
