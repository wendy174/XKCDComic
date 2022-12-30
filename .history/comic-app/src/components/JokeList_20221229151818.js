import React from "react";
import Joke from "./Joke";


function JokeList({ jokes }) {
    const jokeArray = jokes.map(joke => <Joke key={ joke.id} joke={ joke } favoriteHandler={ favoriteHandler }/>)
    return (
        <div className="col">
            { jokeArray }
        </div>
    )
}

export default JokeList;