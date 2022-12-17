const { add, subtract } = require("./math_lib");
const { expect, test } = require("./testing_lib.js");

test("Add functionality", () => {
  const a = 5;
  const b = 2;
  const expected = 7;

  const result = add(a, b);

  expect(result).toBe(expected);
});

test("Subtract functionality", () => {
  const a = 5;
  const b = 2;
  const expected = 3;

  const result = subtract(a, b);

  expect(result).toBe(expected);
});
