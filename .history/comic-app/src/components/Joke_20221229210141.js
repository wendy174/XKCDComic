import React from "react";

function Joke({ joke, favoriteHandler }) {
    console.log(joke);

    function onFavorite(e) {
        console.log(e)
        //favoriteHandler();
    }

    return (
        <>
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ joke.title }</h2>
                <p>Published: {joke.month}/{joke.day}/{joke.year}</p>
                <p>{ joke.alt }</p>
                <img src={joke.img} alt={joke.title} />
                <br></br>
                <br></br>
                <button className="btn btn-outline-light" type="button" onClick={ onFavorite }>Favorite</button>
                <button className="btn btn-outline-light" type="button" onClick={ onFavorite }>Favorite</button>
            </div>
            <br></br>
        </>
    )

}

export default Joke;