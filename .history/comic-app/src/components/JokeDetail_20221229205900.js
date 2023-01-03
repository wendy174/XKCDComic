import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

function JokeDetail() {
    const [joke, setJoke] = useState(null);
    const params = useParams();
    const id = params.id;


    useEffect(() => {
        fetch(`http://localhost:3001/jokes/${id}`)
        .then(resp => resp.json())
        .then(joke => setJoke(joke))
        .catch(e => console.log(e));
    }, [id]);

    if(!joke) { return <h2>Loading...</h2> }

    return (
        <>
            <Hero title={ joke.title } image={"https://logo.clearbit.com/xkcd.com"} description={`Published: ${joke.month}/${joke.day}/${joke.year}`}/>
            <div className="container py-4">
                <div className="row align-items-md-stretch">
                    <div className="p-5 text-bg-dark rounded-3 d-flex justify-content-center">
                        <img src={ joke.img } alt={ joke.transcript } />
                        <br></br>
                        <br></br>
                        <p><b>Comic's Note:</b> { joke.alt }</p>
                    </div>
                </div>
            </div>
         </>
    );
}

export default JokeDetail;