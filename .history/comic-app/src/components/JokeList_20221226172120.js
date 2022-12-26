import React from "react";
import Joke from "./Joke";


function JokeList({ jokes }) {
    const jokeArray = jokes.map(joke => <Joke key={ joke.id} joke={ joke }/>)
    return (
        <div class="col">
            { jokeArray }
        </div>
    )
}

export default JokeList;