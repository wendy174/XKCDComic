import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar';
import Hero from './Hero';
import Main from './Main';
import Favorites from "./Favorites";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Route path="/">
        <Main />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
