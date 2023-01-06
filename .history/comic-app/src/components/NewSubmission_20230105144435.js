import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewSubmission({ handleNewComic }) { 
    
const [title, setTitle] = useState('');
const [image, setImage] = useState('');
const [comment, setComment] = useState('');

const history = useHistory();

function handleSubmit(e) { 
    e.preventDefault();

    const newDate = new Date();
    const currentDate = newDate.getDate().toString();
    const month = newDate.getMonth() + 1;
    const currentMonth = month.toString();
    const currentYear = newDate.getFullYear().toString();

    const newComic = { 
        title: title, 
        img: image, 
        alt: comment,
        month: currentMonth,
        link: "",
        year: currentYear,
        news: "",
        safe_title: title,
        transcript: comment,
        alt: comment,
        day: currentDate,
        favorited: false,
        comments: [],
        alt: comment 
    };

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
        <div className="container py-4">
        <div className="row align-items-md-stretch">
            
            </div>
        
        </div>
    )
}

export default NewSubmission