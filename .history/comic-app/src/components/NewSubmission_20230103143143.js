import React, { useEffect, useState } from 'react';



function NewSubmission({handleNewComic}) { 
    
const [title, setTitle] = useState('')
const [image, setImage] = useState('')
const [comment, setComment] = useState('')
const [publishedDate, setPublishedDate] = useState('unknown')

function handleSubmit(e) { 
    e.preventDefault() 
    let newComic = { 
        title: title, 
        img: image, 
        alt: comment,
        "month": "",
        "link": "",
        "year": "",
        "news": "",
        "safe_title": title,
        "transcript": "[[A woman is talking on the phone, holding a cup]]\nPhone: Hi, this is your son's school. We're having some computer trouble.\nMom: Oh dearâdid he break something?\nPhone: In a wayâ\nPhone: Did you really name your son \"Robert'); DROP TABLE Students;--\" ?\nMom: Oh, yes. Little Bobby Tables, we call him.\nPhone: Well, we've lost this year's student records. I hope you're happy.\nMom: And I hope you've learned to sanitize your database inputs.\n{{title-text: Her daughter is named Help I'm trapped in a driver's license factory.}}",
        "alt": "Her daughter is named Help I'm trapped in a driver's license factory.",
        "img": "https://imgs.xkcd.com/comics/exploits_of_a_mom.png",
        "title": "Exploits of a Mom",
        "day": "10",
        "favorited": true,
        "comments":
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
        setTitle('');
        setImage('');
        setComment('');
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
                <label for="comments">Comments</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
    )
}

export default NewSubmission