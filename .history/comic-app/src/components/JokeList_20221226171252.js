import React from "react";
import Joke from "./Joke";


function JokeList({ jokes }) {
    const jokeArray = jokes.map(joke => <Joke joke={ joke }/>)
    return (
        <div class="col">
            <Joke />
        </div>
    )
}

export default JokeList;