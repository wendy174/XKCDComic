import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

function JokeDetail() {
    const [joke, setJoke] = useState(null);
    const [comicComments, setComicComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const params = useParams();
    const id = params.id;


    useEffect(() => {
        fetch(`http://localhost:3001/jokes/${id}`)
        .then(resp => resp.json())
        .then(joke => {
            setJoke(joke);
            setComicComments(joke.comments);
        })
        .catch(e => console.log(e));
    }, [id]);

    if(!joke || !comicComments) { return <h2>Loading...</h2> }

    function handleDeleteComment(commentId) {
        const newComments = comicComments.filter(comment => comment.id !== commentId);

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
        .then(joke => setComicComments(newComments))
        .catch(e => console.log(e));
    }

    function handlePostComment(e) {
        e.preventDefault();

        const newComments = [...comicComments, newComment];
        console.log(newComments);

        const newJoke = {...joke, comments: newComments};

        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newJoke)
        };

        /*
        fetch(`http://localhost:3001/jokes/${id}`, configObj)
        .then(resp => resp.json())
        .then(joke => setComicComments(newComments))
        .catch(e => console.log(e));
    }
    
    function commentBody(comment) {
        return (
            <div key={ comment.id }>
                <div>
                    <p><b>Comment { comment.id }: </b>{ comment.text }</p>
                    <button className="btn btn-secondary" onClick={() => handleDeleteComment(comment.id) }type="button">Delete</button>
                </div>
                <br></br>
            </div>
        );
    };

    const comments = comicComments.map(comment => commentBody(comment));

    const commentsSection = (
        <>  
            <p><b>Something to share?</b></p>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="I think..." aria-label="Comment" value={ newComment } onChange={ e => setNewComment(e.target.value)}/>
                <button className="btn btn-success" type="submit" onSubmit={ handlePostComment }>Post</button>
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
                            { comments }
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