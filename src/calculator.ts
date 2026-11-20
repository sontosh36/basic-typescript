function add(a: number, b: number) {
  return a + b;
}
const subtract = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;
const power = (base: number, exponent: number = 2): number =>
  Math.pow(base, exponent);
const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};

const calculate = (operation: string, a: number, b: number): number => {
  switch (operation) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "^":
      return power(a, b);
    default:
      throw new Error(`Operation ${operation} is not supported.`);
  }
};