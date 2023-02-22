import { useState } from "react";

export function Counter({ initialValue, onCounterUpdate }) {
  const [counter, setCounter] = useState(initialValue);

  function increment() {
    setCounter(counter + 1);
    onCounterUpdate();
  }
  function decrement() {
    setCounter(counter - 1);
    onCounterUpdate();
  }
  function reset() {
    setCounter(0);
    onCounterUpdate();
  }
  function switchSign() {
    setCounter(-counter);
    onCounterUpdate();
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
