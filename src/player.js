const gameboard = require('./gameboard');

const Player = () => {
  const playerBoard = gameboard();

  return { playerBoard };
};
module.exports = Player;
