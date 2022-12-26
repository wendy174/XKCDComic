import React from "react";
import NavBar from './NavBar';
import Hero from './Hero';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Route path="/"></Route>
      <Main />
    </div>
  );
}

export default App;
