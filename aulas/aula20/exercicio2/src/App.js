import './App.css';
import './components1.css';
import Login from './components1.js';
import Username from './components2.js';
import Password from './components3.js';
import End from './components4.js';

function App() {
  return (
    <div className="container">
      <div className="containerTwo">
        <div className="components1">
          <Login name/>
        </div>
        <div className="containerTre">
          <div className="components2">
            <Username name1=<input id="botao1" bottom></input> />
          </div>
          <div className="components3">
            <Password name2=<input id="botao2" bottom></input> />
          </div>
        </div>
        <div className="components4">
          <End />
        </div>
      </div>
    </div>
  );
}

export default App;
