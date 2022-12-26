import React from "react";
import FavoriteJokes from "./FavoriteJokes";


function Favorites() {
    return (
        <div class="container py-4">
            <div class="row align-items-md-stretch">
                <FavoriteJokes />   
            </div>
        </div>
    )
}

export default Favorites;