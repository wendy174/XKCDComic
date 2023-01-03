import React from "react";
import { Link } from "react-router-dom";

function FavoriteJoke({ favorite, unfavoriteJoke }) {

    function unfavoriteHandler() {
        const updatedJoke = {};
        
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ favorited : false })

        };

        fetch(`http://localhost:3001/favorites/${favorite.id}`, configObj)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            unfavoriteJoke(favorite.id);
        })
        .catch(e => console.log(e));
    }

    return (
        <>
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ favorite.title }</h2>
                <p>Published: { favorite.month }/{ favorite.day }/{ favorite.year }</p>
                <img src={ favorite.img } alt={ favorite.transcript } style={{ width: "200px" }} className="img-thumbnail" />
                <br></br>
                <br></br>
                <p><b>Comic's Note:</b> { favorite.alt }</p>
                <div className="gap-2 d-sm-flex">
                    <button className="btn btn-warning" onClick={ unfavoriteHandler } type="button">Unfavorite</button>
                    <Link className="btn btn-primary" type="button" to={`/comics/${favorite.id}`}>See Details</Link>
                </div>
            </div>
            <br></br>
        </>
    )

}

export default FavoriteJoke;