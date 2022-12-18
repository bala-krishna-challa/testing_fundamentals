const assert = require("assert");
const startGame = require("../game");
const utils = require("../utils");

const originalUtilGetWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p1;

const winner = startGame("Player X", "Player Y");
assert.strictEqual(winner, "Player X");

utils.getWinner = originalUtilGetWinner;
