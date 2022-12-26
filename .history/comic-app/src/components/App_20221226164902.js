import React from "react";
import NavBar from './NavBar';
import Hero from './Hero';
import Main from './Main';

function App() {
  return (
    <Route path="/">
    <div className="App">
      <NavBar />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
