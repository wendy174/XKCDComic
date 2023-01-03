import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JokeDetail() {
    const [joke, setJoke] = useState(null);
    const [id] = useParams();

    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:3001/jokes/${id}`)
        .then(resp => resp.json())
        .then(joke => console.log(joke))
        .catch(e => console.log(e));
    }, [id]);

    if(!joke) { return <h2>Loading...</h2> }

    return (
        <>
        {/* 
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ joke.title }</h2>
                <p>Published: {joke.month}/{joke.day}/{joke.year}</p>
                <p>{ joke.alt }</p>
                <img src={joke.img} alt={joke.title} />
                <br></br>
                <br></br>
                <button className="btn btn-outline-light" type="button">Favorite</button>
            </div>
        */}
        </>
    )
}

export default JokeDetail;