import React from "react";
import FavoriteJokes from "./FavoriteJokes";


function Favorites({ favorites, unfavoriteJoke }) {
    return (
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <FavoriteJokes favorites={ favorites } unfavoriteJoke={ unfavoriteJoke }/>   
            </div>
        </div>
    )
}

export default Favorites;