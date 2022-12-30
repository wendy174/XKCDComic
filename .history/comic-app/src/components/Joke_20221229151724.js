import React from "react";

function Joke({ joke }) {
    console.log(joke);

    function favoriteHandler()

    return (
        <>
        {/* Wendy to work on Joke.js */}
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ joke.title }</h2>
                <p>{ joke.description }</p>
                <button className="btn btn-outline-light" type="button" onClick={ favoriteHandler }>Favorite</button>
            </div>
            <br></br>
        </>
    )

}

export default Joke;