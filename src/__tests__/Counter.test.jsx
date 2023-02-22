import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "components/Counter/Counter";

describe("<Counter/>", () => {
  const onCounterUpdate = jest.fn();
  beforeEach(() => {
    render(<Counter initialValue={99} onCounterUpdate={onCounterUpdate} />);
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

  it("decrements by one when clicking on decrement button", () => {
    //  render(<Counter initialValue={99} />);
    const btnIncrement = screen.getByTestId("decrementBtn");
    fireEvent.click(btnIncrement);
    expect(getCounter()).toBe("98");
  });

  it("resets to 0 when clicking on reset button", () => {
    //  render(<Counter initialValue={99} />);
    const btnReset = screen.getByTestId("resetBtn");
    fireEvent.click(btnReset);
    expect(getCounter()).toBe("0");
  });

  it("switches to opposite sign when clicking on switch sign button", () => {
    //  render(<Counter initialValue={99} />);
    const btnSwitchSign = screen.getByTestId("switchSignBtn");
    fireEvent.click(btnSwitchSign);
    expect(getCounter()).toBe("-99");
  });

  it("increases the number of actions performed when a button is clicked", () => {
    const btnSwitchSign = screen.getByTestId("switchSignBtn");
    const btnReset = screen.getByTestId("resetBtn");
    const btnDecrement = screen.getByTestId("decrementBtn");
    const btnIncrement = screen.getByTestId("incrementBtn");

    fireEvent.click(btnSwitchSign);
    fireEvent.click(btnReset);
    fireEvent.click(btnDecrement);
    fireEvent.click(btnIncrement);

    expect(onCounterUpdate).toHaveBeenCalledTimes(4);
  });
});

const getCounter = () => screen.getByRole("heading", { level: 2 }).textContent;
