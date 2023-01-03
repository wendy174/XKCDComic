import React from "react";
import JokeList from "./JokeList";
//import FavoriteJokes from "./FavoriteJokes";


function Main({ jokes, favoriteJoke }) {

    //Need to build favorite mechanism
    function favoriteHandler() {

    }

    return (
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <JokeList jokes={ jokes } favoriteJoke={ favoriteJoke }/>   
            </div>
        </div>
    )
}

export default Main;