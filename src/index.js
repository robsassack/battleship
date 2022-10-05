import './style.css';

const ship = require('./ship');
const player = require('./player');

const playerBoard = document.querySelector('#playerBoard');
const computerBoard = document.querySelector('#computerBoard');

const game = () => {
  // creation of players
  const human = player();
  const computer = player();

  // set boards up
  human.playerBoard.placeShip(ship(4), 0, 0, 'horizontal');
  computer.playerBoard.placeShip(ship(4), 0, 0, 'vertical');

  // draw the boards on the page
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
        if (board[x][y] !== 0 && human.playerBoard.board[x][y] !== 'X') {
          cellDiv.classList.add('ship');
        } if (board[x][y] === 1) {
          cellDiv.classList.add('miss');
        } if (board[x][y] === 'X') {
          cellDiv.classList.remove('ship');
          cellDiv.classList.add('hit');
        }
      });
      container.appendChild(rowDiv);
    });
  };

  renderBoard(human.playerBoard.board, playerBoard);
  renderBoard(computer.playerBoard.board, computerBoard);

  // allow player to click on board to send move
  const activateBoard = (board, container) => {
    const containerContent = container;
    containerContent.childNodes.forEach((row, x) => {
      row.childNodes.forEach((cell, y) => {
        cell.addEventListener('click', () => {
          board.receiveAttack(x, y);
          renderBoard(board.board, container);
        });
      });
    });
  };

  activateBoard(computer.playerBoard, computerBoard);
};

game();
