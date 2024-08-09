import './App.css';
import Welcome from "./components/components1.js";
import Botao from "./components/components2.js";

function App() {
  return (
  <div className="container">
        <Welcome name="SPOTIFY"/>
        <Botao search="Play" />
  </div> 
  );
}

export default App;