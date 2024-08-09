import './App.css';
import './components1.css';
import Login from './components1.js';
import Username from './components2.js';
import Password from './components3.js';

function App() {
  return (
    <div className="container">
      <Login name/>
      <Username name1/>
      <Password name2/>
    </div>
  );
}

export default App;
