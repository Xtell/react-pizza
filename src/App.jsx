import { Header } from "./components/index.js";
import { useEffect, useState } from "react";

function App() {
  const [ data, setData ] = useState({})

  return (
    <div className="app">
      <div className="flow-container">
        <div className="page">
          <Header logoSrc="images/logo.png" logoTitle="REACT PIZZA" logoTagline="самая вкусная пицца во вселенной"/>
        </div>
      </div>

    </div>
  )
}

export default App