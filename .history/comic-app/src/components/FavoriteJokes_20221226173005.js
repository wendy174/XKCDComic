import React from "react";
import FavoriteJoke from "./FavoriteJoke";

function FavoriteJokes({ favorites }) {
    const favoritesArray = favorites.map(favorite => <FavoriteJoke favoriteJoke={ favoriteJoke }/>)
    return (
        <div className="col">
            { favoritesArray }
        </div>
    )
}

export default FavoriteJokes;