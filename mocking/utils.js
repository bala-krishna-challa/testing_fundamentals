const getWinner = (player1, player2) => {
  const randomValue = Math.random();
  return randomValue < 1 / 2 ? player1 : player2;
};

module.exports = { getWinner };
