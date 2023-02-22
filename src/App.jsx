import { Counter } from "components/Counter/Counter";
import { RandomUser } from "components/RandomUser/RandomUser";
import { Calculator } from "components/Calculator/Calculator";
import s from "./App.module.css";
import { useState } from "react";
export function App() {
  const [countCounterUpdates, setCounterUpdates] = useState(0);
  return (
    <div className={s.root}>
      <Calculator />
      <Counter
        initialValue={0}
        onCounterUpdate={() => setCounterUpdates(countCounterUpdates + 1)}
      />
      <p>The counter has been updated {countCounterUpdates} times</p>
      <RandomUser />
    </div>
  );
}
