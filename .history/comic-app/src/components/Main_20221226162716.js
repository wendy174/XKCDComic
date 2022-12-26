import React from "react";
import JokeList from "./JokeList";
import FavoriteJokes from "./FavoriteJokes";


function Main() {
    return (
        <div class="container py-4">
            <div class="row align-items-md-stretch">
                <JokeList />
                <FavoriteJokes />      
        </div>
    </div>
    )
}

export default Main;