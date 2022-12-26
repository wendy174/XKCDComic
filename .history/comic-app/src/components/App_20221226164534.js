import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar';
import Hero from './Hero';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
