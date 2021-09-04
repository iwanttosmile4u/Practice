import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function computeInitialCounter() {
  console.log("Some conculations");
  return Math.trunc(Math.random() * 20);
}

function App() {
  // const [counter, setCounter] = useState(computeInitialCounter());
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  function increment() {
    // setCounter(counter + 1);
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setCounter((prev) => prev + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Delete</button>
    </div>
  );
}

export default App;
