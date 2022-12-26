import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBar from './NavBar';
import Hero from './Hero';
import Main from './Main';
import Favorites from "./Favorites";

function App() {
  const baseURL = " http://localhost:3001";
  const [jokes, setJokes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(baseURL + "jokes")
    .then(resp => resp.json())
    .then(jokes => setJokes(jokes))
    .catch(e => console.log(e));

  }, []);

  useEffect(() => {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(jokes => setJokes(jokes))
    .catch(e => console.log(e));

  }, []);

  return (
    <div className="App">
      <NavBar />
      <Route path="/home">
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
