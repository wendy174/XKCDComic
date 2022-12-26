import React from "react";
import FavoriteJokes from "./FavoriteJokes";


function Favorites() {
    return (
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <FavoriteJokes />   
            </div>
        </div>
    )
}

export default Favorites;