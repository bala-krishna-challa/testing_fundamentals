const { add, subtract, addAsync, subtractAsync } = require("./math_lib");
// We are now using jest directly...
// const { expect, test } = require("./testing_lib.js");

test("add should add numbers synchronously", () => {
  const a = 5;
  const b = 2;
  const expected = 7;

  const result = add(a, b);

  expect(result).toBe(expected);
});

test("subtract should subtract numbers synchronously", () => {
  const a = 5;
  const b = 2;
  const expected = 3;

  const result = subtract(a, b);

  expect(result).toBe(expected);
});

test("addAsync should add numbers asynchronously", async () => {
  const a = 5;
  const b = 2;
  const expected = 7;

  const result = await addAsync(a, b);

  expect(result).toBe(expected);
});

test("subtractAsync should subtract numbers asynchronously", async () => {
  const a = 5;
  const b = 2;
  const expected = 3;

  const result = await subtractAsync(a, b);

  expect(result).toBe(expected);
});
