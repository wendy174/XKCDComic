import React from "react";
import JokeList from "./JokeList";
//import FavoriteJokes from "./FavoriteJokes";


function Main({ jokes, favoriteJoke }) {


    return (
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <JokeList jokes={ jokes } favoriteJoke={ favoriteJoke }/>   
            </div>
        </div>
    )
}

export default Main;