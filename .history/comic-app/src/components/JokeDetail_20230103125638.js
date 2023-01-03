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

    function commentBody(comment) {
        return (
            <div key={ comment.id }>
                <div>
                    <p><b>Comment { comment.id }: </b>{ comment.text }</p>
                    <button className="btn btn-secondary" onClick={ handleDeleteComment }type="button">Delete</button>
                </div>
                <br></br>
            </div>
        );
    };

    const comments = joke.comments.map(comment => commentBody(comment));

    const commentsSection = (
        <>  
            <p><b>Something to share?</b></p>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="I think..." aria-label="Comment" />
                <button className="btn btn-outline-success" type="submit">Post</button>
            </form>
            <br></br>
            <br></br>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Comments
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            { comments }
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );

    function handleDeleteComment(id) {
        const newComments = comments.filter(comment => comment.id !== id)

        const newJoke = {...joke, newComments};

        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify()
        };

        fetch(`http://localhost:3001/jokes/${id}`)
        .then(resp => resp.json())
        .then(joke => setJoke(joke))
        .catch(e => console.log(e));
    }

    return (
        <>
            <Hero title={ joke.title } image={"https://logo.clearbit.com/xkcd.com"} description={`Published: ${joke.month}/${joke.day}/${joke.year}`}/>
            <div className="container py-4">
                <div className="row align-items-md-stretch">
                    <div className="p-5 text-bg-dark rounded-3">
                        <img src={ joke.img } alt={ joke.transcript } />
                        <br></br>
                        <br></br>
                        <p><b>Comic's Note:</b> { joke.alt }</p>
                        <br></br>
                        <br></br>
                        { commentsSection }
                    </div>
                </div>
            </div>
         </>
    );
}

export default JokeDetail;