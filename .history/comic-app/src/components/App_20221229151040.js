import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBar from './NavBar';
import Hero from './Hero';
import Main from './Main';
import Favorites from "./Favorites";

function App() {
  const baseURL = " http://localhost:3001/";
  const [jokes, setJokes] = useState([]);
  const [favorites, setFavorites] = useState([]);


  //https://xkcd.com/614/info.0.json

  /*
  useEffect(() => {
    fetch("https://xkcd.com/614/info.0.json", {
       method: 'GET',  
       withCredentials: true,  
       crossorigin: true,  
       mode: 'no-cors',
       headers: {
        "Access-Control-Allow-Origin" : "http://localhost:3000"
       }
    })
    .then(resp => resp.json())
    .then(jokes => console.log(jokes))
    .catch(e => console.log(e));
  }, []);
  */

  useEffect(() => {
    fetch(baseURL + "jokes")
    .then(resp => resp.json())
    .then(jokes => setJokes(jokes))
    .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    fetch(baseURL + "favorites")
    .then(resp => resp.json())
    .then(favorites => setFavorites(favorites))
    .catch(e => console.log(e));

  }, []);

  return (
    <div className="App">
      <NavBar />
      <Route path="/">
        <Hero title="xkcd jokes" description="xkcd is an old famous comic strip that has been around for years. We hope you enjoy these!"/>
        <Main jokes={ jokes }/>
      </Route>
      <Route path="/favorites">
        <Hero title="favorites" description="These are all of your favorite xkcd jokes!"/>
        <Favorites favorites={ favorites }/>
      </Route>
    </div>
  );
}

export default App;
