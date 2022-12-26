import React from "react";
import Joke from "./Joke";

function FavoriteJokes({ favorites }) {
    const favoritesArray = favorites.map(favorite => <Joke favorite={ favorite }/>)
    return (
        <div className="col">
            {/*<Joke />*/}
        </div>
    )
}

export default FavoriteJokes;