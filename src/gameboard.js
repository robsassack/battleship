const Gameboard = () => {
  const board = Array(10).fill().map(() => Array(10).fill(0));
  const receiveAttack = (x, y) => {
    board[x][y] = 1;
  };
  return { board, receiveAttack };
};
module.exports = Gameboard;
