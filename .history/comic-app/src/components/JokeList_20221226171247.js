import React from "react";
import Joke from "./Joke";


function JokeList({ jokes }) {
    const jokeArray = jokes.map(joke => <Joke />)
    return (
        <div class="col">
            <Joke />
        </div>
    )
}

export default JokeList;