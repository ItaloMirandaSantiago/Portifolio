import React, { useState } from "react";
import './style.scss/Main.scss'
import Sobre from './components/Sobre'
import Home from './components/Home'

function App() {
  const [HomeMain, setHomeMain] = useState(true)

  return (
    <div className="App">
        <div className="menu">
            <div>
              <a href="/">Home</a>
              <a href="./components/Sobre">Sobre</a>
              <a href="/">Projetos</a>
            </div>
        </div>
        {HomeMain && (
          <Home />
        )}
    </div>
  );
}

export default App;
