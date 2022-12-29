import React from "react";

function Joke({ joke, favoriteHandler }) {
    console.log(joke);

    function onFavorite(e) {
        console.log(e)
        //favoriteHandler();
    }

    return (
        <>
        {/* Wendy to work on Joke.js */}
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ joke.title }</h2>
                <p>{ joke.alt }</p>
                <img src={joke.img} alt={joke.title} />
                <br></br>
                <button className="btn btn-outline-light" type="button" onClick={ onFavorite }>Favorite</button>
            </div>
            <br></br>
        </>
    )

}

export default Joke;