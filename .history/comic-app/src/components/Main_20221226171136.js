import React from "react";
import JokeList from "./JokeList";
//import FavoriteJokes from "./FavoriteJokes";


function Main({ jokes }) {
    return (
        <div class="container py-4">
            <div class="row align-items-md-stretch">
                <JokeList />   
            </div>
        </div>
    )
}

export default Main;