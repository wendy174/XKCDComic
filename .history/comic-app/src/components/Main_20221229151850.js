import React from "react";
import JokeList from "./JokeList";
//import FavoriteJokes from "./FavoriteJokes";


function Main({ jokes }) {

    //Ann to work on it
    function favoriteHandler() {

    }

    return (
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <JokeList jokes={ jokes } favoriteHandler={ favoriteHandler }/>   
            </div>
        </div>
    )
}

export default Main;