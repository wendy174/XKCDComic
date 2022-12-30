import React from "react";

function Joke({ joke }) {
    console.log(joke);
    return (
        <>
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ joke.title }</h2>
                <p>{ joke.description }</p>
                <button className="btn btn-outline-light" type="button">Example button</button> {/* Ann to work on favorite button*/}
            </div>
            <br></br>
        </>
    )

}

export default Joke;