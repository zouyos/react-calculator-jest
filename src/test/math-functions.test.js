import { divide, multiply, substract, sum } from "utils/math-functions";

describe("Math functions", () => {
  it("Sum correctly 2 values", () => {
    expect(sum()).toBe(0);
    expect(sum(0)).toBe(0);
    expect(sum(0, -1)).toBe(-1);
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(-1.5, 0.5)).toBe(-1);
  });

  it("Substract correctly 2 values", () => {
    expect(substract()).toBe(0);
    expect(substract(0)).toBe(0);
    expect(substract(2, 3)).toBe(-1);
    expect(substract(-1, -1)).toBe(0);
    expect(substract(-1.5, 0.5)).toBe(-2);
  });

  it("Multiply correctly 2 values", () => {
    expect(multiply()).toBe(0);
    expect(multiply(0)).toBe(0);
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(1.7, 3)).toBe(5.1);
    expect(multiply(-1.5, 0.5)).toBe(-0.75);
  });

  it("Divide correctly 2 values", () => {
    expect(() => divide()).toThrowError("You can't divide by 0");
    expect(divide(2, 3)).toBe(0.67);
    expect(divide(0, -1)).toBe(0);
    expect(divide(1, 1)).toBeGreaterThan(0);
    expect(divide(-1, -1)).toBe(1);
    expect(divide(-1.5, 0.5)).toBe(-3);
  });
});
