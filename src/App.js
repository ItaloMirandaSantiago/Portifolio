import React from "react";
import './style.scss/Main.scss'

function App() {
  return (
    <div className="App">
        <div className="menu">
            <img />
            <div>
              <a href="/">Home</a>
              <a href="/">Sobre</a>
              <a href="/">Projetos</a>
            </div>
        </div>
        <div className="title">
          <h2>Olá! Meu nome é Italo Miranda</h2>
          <p>Programador Front-end</p>
        </div>
        <img width={"300px"} src="https://cdn-icons.flaticon.com/png/512/6061/premium/6061291.png?token=exp=1659237383~hmac=23ee84addf070e5c2939716474237d0f" />
    </div>
  );
}

export default App;
