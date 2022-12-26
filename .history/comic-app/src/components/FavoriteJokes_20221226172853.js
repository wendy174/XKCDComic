import React from "react";
import Joke from "./Joke";

function Favorites({ favorites }) {
    const favoritesArray = favorites.map(favorite => <Joke favoriteJoke={ favoriteJoke }/>)
    return (
        <div className="col">
            {/*<Joke />*/}
        </div>
    )
}

export default Favorites;