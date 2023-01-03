import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



function NewSubmission({handleNewComic}) { 
    
const [title, setTitle] = useState('');
const [image, setImage] = useState('');
const [comment, setComment] = useState('');

const history = useHistory();

function handleSubmit(e) { 
    e.preventDefault();

    let newDate = new Date();
    let date = newDate.getDate();
    let currentMonth = newDate.getMonth();
    let year = newDate.getFullYear();
    
    let newComic = { 
        title: title, 
        img: image, 
        alt: comment,
        month: "",
        link: "",
        year: "",
        news: "",
        safe_title: title,
        transcript: comment,
        alt: comment,
        day: "",
        favorited: false,
        comments: []
    }

    fetch(`http://localhost:3001/jokes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComic),
    })
      .then(resp => resp.json())
      .then(data => {
        handleNewComic(data);
        history.push(`/comics/${data.id}`);
      });
  
}

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="title">Title</label>
                <input type="text" className="form-control" id="title-Input" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label for="url">Image</label>
                <input type="text" className="form-control" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            {/* <div className="form-group">
                <label for="date-published">Published Date</label>
                <input type="text" className="form-control" id="date-published" placeholder='Example:01/01/2023'/>
            </div> */}
            <div className="form-group">
                <label for="comments">Comic's Note</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
    )
}

export default NewSubmission