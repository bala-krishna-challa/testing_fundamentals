const assert = require("assert");
const startGame = require("../game");
const utils = require("../utils");

const fn = (mockImplemention) => {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return mockImplemention(...args);
  };
  mockFn.mock = { calls: [] };

  return mockFn;
};

const originalUtilGetWinner = utils.getWinner;
utils.getWinner = fn((p1, p2) => p1);

const winner = startGame("Player X", "Player Y");
assert.strictEqual(winner, "Player X");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Player X", "Player Y"],
  ["Player X", "Player Y"],
]);

utils.getWinner = originalUtilGetWinner;
