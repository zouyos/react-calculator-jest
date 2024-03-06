import { useState } from "react";
import { divide, multiply, substract, sum } from "utils/math-functions";

const OPERATORS = ["+", "-", "x", "/"];

export function Calculator({ defaultA, defaultB, defaultOperator }) {
  const [inputValueA, setInputValueA] = useState(
    !defaultA || isNaN(defaultA) ? 0 : Number(parseFloat(defaultA))
  );
  const [inputValueB, setInputValueB] = useState(
    !defaultB || isNaN(defaultB) ? 0 : Number(parseFloat(defaultB))
  );
  const [operator, setOperator] = useState(
    OPERATORS.includes(defaultOperator) ? defaultOperator : "+"
  );

  const getResult = () => {
    switch (operator) {
      case "+":
        return sum(inputValueA, inputValueB);
      case "-":
        return substract(inputValueA, inputValueB);
      case "x":
        return multiply(inputValueA, inputValueB);
      case "/":
        return divideSafely(inputValueA, inputValueB);
      default:
        return "No operator provided";
    }
  };

  const divideSafely = (a, b) => {
    try {
      return divide(a, b);
    } catch (error) {
      return error.message;
    }
  };

  const renderInputA = () => {
    return (
      <input
        data-testid="inputA"
        type="number"
        value={inputValueA}
        onChange={(e) =>
          setInputValueA(
            e.target.value ? Number(parseFloat(e.target.value)) : 0
          )
        }
      />
    );
  };

  const renderInputB = () => {
    return (
      <input
        data-testid="inputB"
        type="number"
        value={inputValueB}
        onChange={(e) =>
          setInputValueB(
            e.target.value ? Number(parseFloat(e.target.value)) : 0
          )
        }
      />
    );
  };

  const renderOperator = () => {
    return (
      <select
        data-testid="operator"
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      >
        {OPERATORS.map((operator, i) => {
          return (
            <option key={i} value={operator}>
              {operator}
            </option>
          );
        })}
      </select>
    );
  };

  return (
    <>
      <h1 style={{ marginBottom: 40 }}>Calculator</h1>
      {renderInputA()}
      {renderOperator()}
      {renderInputB()}
      <h2>Result</h2>
      <div data-testid="result">{getResult()}</div>
    </>
  );
}
