import React from "react";

function FavoriteJoke({ favorite }) {
    console.log(favorite);
    return (
        <>
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ favorite.title }</h2>
                <p>Published: {favorite.month}/{favorite.day}/{favorite.year}</p>
                <img src={ joke.img } alt={ joke.transcript } />
                <br></br>
                <br></br>
                <p><b>Comic's Note:</b> { joke.alt }</p>
                <div className="gap-2 d-sm-flex">
                    <button className="btn btn-danger" type="button" onClick={ onFavorite }>Favorite</button>
                    <Link className="btn btn-primary" type="button" to={`/comics/${joke.id}`}>See Details</Link>
                </div>
            </div>
            <br></br>
        </>
    )

}

export default FavoriteJoke;