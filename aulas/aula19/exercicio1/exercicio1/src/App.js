import './App.css';
import Welcome from './componente1';
import imgspt from './spotify.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          1° Música da PlayListGeek!
        </p>
        <Welcome src={imgspt} />
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
