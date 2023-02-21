import { Counter } from "components/Counter/Counter";
import { RandomUser } from "components/RandomUser/RandomUser";
import s from "./App.module.css";
export function App() {
  return (
    <div className={s.root}>
      <Counter initialValue={0} />
      <RandomUser />
    </div>
  );
}
