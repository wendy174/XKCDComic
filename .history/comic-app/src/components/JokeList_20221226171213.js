import React from "react";
import Joke from "./Joke";


function JokeList({ jokes }) {
    return (
        <div class="col">
            <Joke />
        </div>
    )
}

export default JokeList;