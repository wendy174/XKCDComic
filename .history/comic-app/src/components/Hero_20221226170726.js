import React from "react";

function Hero ({ title, description }) {
    return (
        <div class="px-4 py-5 my-5 text-center"> 
            <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> 
            <h1 class="display-5 fw-bold">{ title }</h1> 
            <div class="col-lg-6 mx-auto"> 
                <p class="lead mb-4">.</p> 
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
                    <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button> 
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button> 
                </div> 
            </div> 
        </div>
    )
}

export default Hero;