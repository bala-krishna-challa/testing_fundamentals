const assert = require("assert");
const startGame = require("../game");
const utils = require("../utils");

const fn = (impl = () => {}) => {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplemention = (mockImpl) => {
    impl = mockImpl;
  };
  return mockFn;
};

const spyOn = (obj, prop) => {
  const originalFn = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => {
    obj[prop] = originalFn;
  };
};

spyOn(utils, "getWinner");
utils.getWinner.mockImplemention((p1, p2) => p1);
const winner = startGame("Player X", "Player Y");
assert.strictEqual(winner, "Player X");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Player X", "Player Y"],
  ["Player X", "Player Y"],
]);

utils.getWinner.mockRestore();
console.log(utils.getWinner);
