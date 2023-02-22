import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "components/Counter/Counter";

describe("<Counter/>", () => {
  beforeEach(() => {
    render(<Counter initialValue={99} />);
  });

  it("has a title element", () => {
    //  render(<Counter initialValue={99} />);
    const titleElement = screen.getByText("Counter");
    expect(titleElement).toBeDefined();
  });

  it("has a correct title content", () => {
    //  render(<Counter initialValue={99} />);
    const title = screen.getByRole("heading", { level: 1 }).textContent;
    expect(title).toBe("Counter");
  });

  it("displays the initial value by default", () => {
    // render(<Counter initialValue={99} />);
    expect(getCounter()).toBe("99");
  });

  it("increments by one when clicking on increment button", () => {
    //  render(<Counter initialValue={99} />);
    const btnIncrement = screen.getByTestId("incrementBtn");
    fireEvent.click(btnIncrement);
    expect(getCounter()).toBe("100");
  });

  it("decrement by one when clicking on decrement button", () => {
    //  render(<Counter initialValue={99} />);
    const btnIncrement = screen.getByTestId("decrementBtn");
    fireEvent.click(btnIncrement);
    expect(getCounter()).toBe("98");
  });

  it("reset to 0 when clicking on reset button", () => {
    //  render(<Counter initialValue={99} />);
    const btnReset = screen.getByTestId("resetBtn");
    fireEvent.click(btnReset);
    expect(getCounter()).toBe("0");
  });

  it("switch to opposite sign when clicking on switch sign button", () => {
    //  render(<Counter initialValue={99} />);
    const btnSwitchSign = screen.getByTestId("switchSignBtn");
    fireEvent.click(btnSwitchSign);
    expect(getCounter()).toBe("-99");
  });
});

const getCounter = () => screen.getByRole("heading", { level: 2 }).textContent;
