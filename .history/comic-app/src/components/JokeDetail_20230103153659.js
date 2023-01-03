import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

function JokeDetail() {
    const [joke, setJoke] = useState(null);
    const [newComment, setNewComment] = useState("");
    const params = useParams();
    const id = params.id;

    // Fetch Comic
    useEffect(() => {
        fetch(`http://localhost:3001/jokes/${id}`)
        .then(resp => resp.json())
        .then(joke => setJoke(joke))
        .catch(e => console.log(e));
    }, [id]);

    // Show loading if joke or comments are null
    if(!joke) { return <h2>Loading...</h2> }

    // Reference for number of comments. Later used for comment ID generation.
    const maxc = useRef(joke.comments.length);

    // Handle delete of comment
    function handleDeleteComment(commentId) {
        const newComments = joke.comments.filter(comment => comment.id !== commentId);

        const newJoke = {...joke, comments: newComments};

        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newJoke)
        };

        fetch(`http://localhost:3001/jokes/${id}`, configObj)
        .then(resp => resp.json())
        .then(joke => setJoke(joke))
        .catch(e => console.log(e));
    }

    // Handle post new comment
    function handlePostComment(e) {
        e.preventDefault();

        let newID = 1;
        if(commentCount > 0) {
            console.log(joke.comments[joke.comments.length - 1].id);
            newID = joke.comments[joke.comments.length - 1].id + 1;
        }
        console.log(newID);
        /*
        const newCommentObj = {
            id: newID,
            text: newComment
        };

        const newComments = [...joke.comments, newCommentObj];

        const newJoke = {...joke, comments: newComments};

        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newJoke)
        };

        fetch(`http://localhost:3001/jokes/${id}`, configObj)
        .then(resp => resp.json())
        .then(joke => {
            setJoke(joke);
            setNewComment("");
        })
        .catch(e => console.log(e));
        */
    }
    
    // Returns JSX for comment body
    function commentBody(comment) {
        return (
            <div key={ comment.id }>
                <div>
                    <p><b>Comment { comment.id }: </b>{ comment.text }</p>
                    <button className="btn btn-outline-secondary" onClick={() => handleDeleteComment(comment.id) }type="button">Delete Comment</button>
                </div>
                <br></br>
            </div>
        );
    };

    // Comment Body Array
    const comments = joke.comments.map(comment => commentBody(comment));

    // Comment Section
    const commentsSection = (
        <>  
            <p><b>Something to share?</b></p>
            <form className="d-flex" role="search" onSubmit={ handlePostComment }>
                <input className="form-control me-2" type="search" placeholder="I think..." aria-label="Comment" value={ newComment } onChange={ e => setNewComment(e.target.value)}/>
                <button className="btn btn-success" type="submit">Post</button>
            </form>
            <br></br>
            <br></br>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Comments
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            { comments.length > 0 ? comments : <p>Be the first to comment!</p> }
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );

    return (
        <>
            <Hero title={ joke.title } image={"https://logo.clearbit.com/xkcd.com"} description={`Published: ${joke.month}/${joke.day}/${joke.year}`}/>
            <div className="container py-4">
                <div className="row align-items-md-stretch">
                    <div className="p-5 text-bg-dark rounded-3">
                        <img src={ joke.img } className='img-fluid' alt={ joke.transcript }/>
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