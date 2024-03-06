import { render, screen, fireEvent } from "@testing-library/react";
import { Calculator } from "components/Calculator/Calculator";

describe("<Calculator />", () => {
  // ne s'execute qu'une fois avant les it
  // beforeAll(() => {
  //   render(<Calculator />);
  // });

  // s'execute avant chaque it
  // beforeEach(() => {
  //   render(<Calculator />);
  // });

  it("has 'Calculator' displayed somewhere", () => {
    render(<Calculator />);

    // const textElement = screen.getByText("Calculator");
    const textElements = screen.getAllByText("Calculator");
    screen.debug(textElements);
    expect(textElements[0].textContent).toBe("Calculator");
  });

  it("has 'Calculator' displayed in h1 element", () => {
    render(<Calculator />);
    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement.textContent).toBe("Calculator");
  });

  it("performs 0 + 0 by default", () => {
    render(<Calculator />);
    const { getInputA, getInputB, getOperator, getResult } = getValues();
    // les values html sont des strings donc on met entre ""
    expect(getInputA()).toBe("0");
    expect(getInputB()).toBe("0");
    expect(getOperator()).toBe("+");
    expect(getResult()).toBe("0");
  });

  it("uses correctly default values", () => {
    render(<Calculator defaultA={5} defaultB={10} defaultOperator={"x"} />);
    const { getInputA, getInputB, getOperator, getResult } = getValues();
    expect(getInputA()).toBe("5");
    expect(getInputB()).toBe("10");
    expect(getOperator()).toBe("x");
    expect(getResult()).toBe("50");
  });

  it("calculates correctly when user changes an input value", () => {
    render(<Calculator defaultA={5} defaultB={10} defaultOperator={"x"} />);
    const { getInputA, getInputB, getOperator, getResult } = getValues();
    //on n'utilise pas getInputA() car on veut l'input et non sa value
    fireEvent.change(screen.getByTestId("inputA"), { target: { value: 3 } });
    expect(getInputA()).toBe("3");
    fireEvent.change(screen.getByTestId("inputB"), { target: { value: 5 } });
    expect(getInputB()).toBe("5");
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "-" },
    });
    expect(getOperator()).toBe("-");
    expect(getResult()).toBe("-2");
  });

  //it.only() permet de skipper les autres tests
  it("displays an error when dividing by 0", () => {
    render(<Calculator defaultA={5} defaultB={10} defaultOperator={"/"} />);
    const { getInputB, getResult } = getValues();
    fireEvent.change(screen.getByTestId("inputB"), { target: { value: 0 } });
    expect(getInputB()).toBe("0");
    expect(getResult()).toBe("You can't divide by 0");
  });

  //Les deux tests suivants on été réalisés après avoir checké le taux de couverture avec 'npm run test:cov'
  //(voir package.json)

  it("displays an error when the operator is invalid", () => {
    render(<Calculator defaultA={5} defaultB={10} defaultOperator={"/"} />);
    const { getResult } = getValues();
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "_" },
    });
    expect(getResult()).toBe("No operator provided");
  });

  it("considers an empty input as 0", () => {
    render(<Calculator defaultA={5} defaultB={10} defaultOperator={"x"} />);
    const { getInputA, getInputB, getOperator, getResult } = getValues();
    fireEvent.change(screen.getByTestId("inputA"), { target: { value: "" } });
    fireEvent.change(screen.getByTestId("inputB"), { target: { value: "" } });
    expect(getResult()).toBe("0");
  });
});

const getValues = () => {
  return {
    getInputA: () => screen.getByTestId("inputA").value,
    getInputB: () => screen.getByTestId("inputB").value,
    getOperator: () => screen.getByTestId("operator").value,
    getResult: () => screen.getByTestId("result").textContent,
  };
};
