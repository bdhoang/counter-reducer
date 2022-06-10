import React from "react";
import { useState } from "react";

export default function FCount() {
  const [counter, setCounter] = useState(1);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1> Function Component Counter</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={handleIncrease}> + </button>
        <button onClick={handleDecrease}> - </button>
      </div>
    </div>
  );
}
