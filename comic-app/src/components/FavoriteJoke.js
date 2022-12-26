import React from "react";

function FavoriteJoke({ favorite }) {
    console.log(favorite);
    return (
        <>
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ favorite.title }</h2>
                <p>{ favorite.description }</p>
                <button className="btn btn-outline-light" type="button">Example button</button>
            </div>
            <br></br>
        </>
    )

}

export default FavoriteJoke;