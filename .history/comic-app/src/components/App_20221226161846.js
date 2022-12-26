import logo from '../assets/logo.svg';
import '../css/App.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <JokeList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
