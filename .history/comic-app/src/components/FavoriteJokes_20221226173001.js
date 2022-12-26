import React from "react";
import Joke from "./Joke";

function FavoriteJokes({ favorites }) {
    const favoritesArray = favorites.map(favorite => <FavoriteJoke favoriteJoke={ favoriteJoke }/>)
    return (
        <div className="col">
            { favoritesArray }
        </div>
    )
}

export default FavoriteJokes;