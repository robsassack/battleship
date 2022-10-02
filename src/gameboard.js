const Gameboard = () => {
  const board = Array(10).fill().map(() => Array(10).fill(0));
  const ships = [];
  const shipOverlap = (ship, x, y, direction) => {
    if (direction === 'horizontal') {
      for (let i = 0; i < ship.length; i += 1) {
        if (board[x][y + i] !== 0) {
          return true;
        }
      }
    } else {
      for (let i = 0; i < ship.length; i += 1) {
        if (board[x + i][y] !== 0) {
          return true;
        }
      }
    }
    return false;
  };
  const placeShip = (ship, x, y, direction) => {
    if (shipOverlap(ship, x, y, direction)) {
      throw new Error('Ships cannot overlap');
    }
    if (direction === 'horizontal') {
      for (let i = 0; i < ship.length; i += 1) {
        board[x][y + i] = [ship, i];
      }
    } else {
      for (let i = 0; i < ship.length; i += 1) {
        board[x + i][y] = [ship, i];
      }
    }
    ships.push(ship);
  };
  const receiveAttack = (x, y) => {
    if (board[x][y] === 0) {
      board[x][y] = 1;
    } else if (board[x][y] === 1) {
      throw new Error('Space already attacked');
    } else {
      board[x][y][0].hit(board[x][y][1]);
      board[x][y] = 'X';
    }
  };
  return {
    board, ships, placeShip, receiveAttack,
  };
};
module.exports = Gameboard;
