import React from "react";

function Hero ({ title, description, image }) {
    return (
        <div className="px-4 py-5 my-5 text-center"> 
            <img className="d-block mx-auto mb-4" src={ image } alt="" width="72" height="57" /> 
            <h1 className="display-5 fw-bold">{ title }</h1> 
            <div className="col-lg-6 mx-auto"> 
                <p className="lead mb-4">{ description }</p> 
            </div> 
        </div>
    )
}

export default Hero;