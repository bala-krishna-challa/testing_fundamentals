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

const utilsPath = require.resolve("../utils");
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p1),
  },
};

const assert = require("assert");
const startGame = require("../game");
const utils = require("../utils");

const winner = startGame("Player X", "Player Y");
assert.strictEqual(winner, "Player X");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Player X", "Player Y"],
  ["Player X", "Player Y"],
]);

delete require.cache[utilsPath];
