import { useState } from "react";

export function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }
  function switchSign() {
    setCounter(-counter);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <div>
        <button data-testid="decrementBtn" onClick={decrement}>
          Decrement
        </button>
        <button data-testid="incrementBtn" onClick={increment}>
          Increment
        </button>
        <button data-testid="resetBtn" onClick={reset}>
          Reset
        </button>
        <button data-testid="switchSignBtn" onClick={switchSign}>
          Switch sign
        </button>
      </div>
    </>
  );
}
