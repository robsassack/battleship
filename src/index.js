import './style.css';

const ship = require('./ship');
const player = require('./player');

const playerBoard = document.querySelector('#playerBoard');
const computerBoard = document.querySelector('#computerBoard');

const game = () => {
  const human = player();
  const computer = player();

  human.playerBoard.placeShip(ship(4), 0, 0, 'horizontal');
  computer.playerBoard.placeShip(ship(4), 0, 0, 'vertical');

  const renderBoard = (board, container) => {
    const containerContent = container;
    containerContent.textContent = '';
    board.forEach((row, x) => {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      row.forEach((cell, y) => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        rowDiv.appendChild(cellDiv);
        if (board[x][y] !== 0 && human.playerBoard.board[x][y] !== 1) {
          cellDiv.classList.add('ship');
        }
      });
      container.appendChild(rowDiv);
    });
  };

  renderBoard(human.playerBoard.board, playerBoard);
  renderBoard(computer.playerBoard.board, computerBoard);
};

game();
