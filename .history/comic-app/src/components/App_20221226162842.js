import logo from '../assets/logo.svg';
import '../css/App.css';
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
