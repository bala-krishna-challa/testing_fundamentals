const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

let result = add(5, 2);
let expected = 7;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  console.log("add is passed!");
}

result = subtract(5, 2);
expected = 3;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  console.log("subtract is passed!");
}
