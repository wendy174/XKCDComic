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
      <Hero />
        <Main />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
