import React from "react";
import Joke from "./Joke";


function JokeList({ jokes, favoriteHandler }) {
    const jokeArray = jokes.map(joke => <Joke key={ joke.id} joke={ joke } favoriteJoke={ favoriteJoke }/>)
    return (
        <div className="col">
            { jokeArray }
        </div>
    )
}

export default JokeList;