import React from "react";
import { Route } from "react-router-dom";
import NavBar from './NavBar';
import Hero from './Hero';
import Main from './Main';
import Favorites from "./Favorites";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/home">
        <Hero title="xkcd jokes"/>
        <Main />
      </Route>
      <Route path="/favorites">
        <Hero title="favorite xkcds"/>
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
