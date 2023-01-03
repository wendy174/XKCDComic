import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBar from './NavBar';
import Hero from './Hero';
import Main from './Main';
import Favorites from "./Favorites";
import JokeDetail from "./JokeDetail";

function App() {
  const baseURL = "http://localhost:3001/jokes";
  const [jokes, setJokes] = useState([]);
  const [favorites, setFavorites] = useState([]);

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

  // Fetch comics for home page
  useEffect(() => {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(jokes => setJokes(jokes))
    .catch(e => console.log(e));
  }, []);

  // Fetch favorites for favorite page
  useEffect(() => {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(jokes => {
      const favorites = jokes.filter(joke => joke.favorited);
      setFavorites(favorites);
    })
    .catch(e => console.log(e));

  }, []);

  function favoriteJoke(favoriteJoke) {
    const newFavorites = [...favo]

  }

  function unfavoriteJoke(id){
    const newFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(newFavorites);
  }

  return (
    <div className="App">
      <NavBar />
      <Route path="/favorites">
        <Hero title="favorites" image={"heart_icon.png"} description="These are all of your favorite xkcd jokes!"/>
        <Favorites favorites={ favorites } unfavoriteJoke={ unfavoriteJoke }/>
      </Route>
      <Route path="/comics/:id">
        <JokeDetail />
      </Route>
      <Route exact path="/">
        <Hero title="xkcd comics" image={"https://logo.clearbit.com/xkcd.com"} description="xkcd is an old, famous comic strip that has been around for years. We hope you enjoy these!"/>
        <Main jokes={ jokes } favoriteJoke={ favoriteJoke } unfavoriteJoke={ unfavoriteJoke }/>
      </Route>
    </div>
  );
}

export default App;
