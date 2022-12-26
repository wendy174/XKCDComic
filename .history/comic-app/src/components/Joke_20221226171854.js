import React from "react";

function Joke({ joke }) {
    console.log(joke);
    return (
        <>
            <div class="p-5 text-bg-dark rounded-3">
                <h2>{ joke.title } </h2>
                <p>{ joke.description }</p>
                <button class="btn btn-outline-light" type="button">Example button</button>
            </div>
            <br></br>
        </>
    )

}

export default Joke;