import React from "react";

function FavoriteJoke({ favoriteJoke }) {
    console.log(joke);
    return (
        <>
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ favoriteJoke.title }</h2>
                <p>{ favoriteJoke.description }</p>
                <button className="btn btn-outline-light" type="button">Example button</button>
            </div>
            <br></br>
        </>
    )

}

export default FavoriteJoke;