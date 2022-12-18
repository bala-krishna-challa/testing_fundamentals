require("../__custom-mocks__/utils");
const mockUtilsPath = require.resolve("../__custom-mocks__/utils");
const utilsPath = require.resolve("../utils");
require.cache[utilsPath] = require.cache[mockUtilsPath];

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
