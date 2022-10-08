import './style.css';

const ship = require('./ship');
const player = require('./player');

const playerBoard = document.querySelector('#playerBoard');
const computerBoard = document.querySelector('#computerBoard');

const game = () => {
  // creation of players
  const human = player();
  const computer = player();

  // random ship placement
  const randomPlace = (board, size) => {
    let randomOrientation = Math.floor(Math.random() * 2);
    if (randomOrientation === 0) {
      randomOrientation = 'horizontal';
    } else {
      randomOrientation = 'vertical';
    }
    let x = 0;
    let y = 0;
    if (randomOrientation === 'horizontal') {
      x = Math.floor(Math.random() * (10 - size));
      y = Math.floor(Math.random() * 10);
    } else {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * (10 - size));
    }
    try {
      board.placeShip(ship(size), x, y, randomOrientation);
    } catch (err) {
      randomPlace(board, size);
    }
  };

  // set player board up
  human.playerBoard.placeShip(ship(3), 3, 3, 'horizontal');

  // place random ships for computer
  randomPlace(computer.playerBoard, 5);
  randomPlace(computer.playerBoard, 4);
  randomPlace(computer.playerBoard, 3);
  randomPlace(computer.playerBoard, 3);
  randomPlace(computer.playerBoard, 2);

  // available moves for computer
  const availableMoves = [];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      availableMoves.push([i, j]);
    }
  }

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
        if (board[x][y] !== 0 && board[x][y] !== 'X') {
          cellDiv.classList.add('ship');
        } if (board[x][y] === 1) {
          cellDiv.classList.add('miss');
          cellDiv.innerText = '•';
        } if (board[x][y] === 'X') {
          cellDiv.classList.add('hit');
          cellDiv.innerText = '•';
        }
      });
      container.appendChild(rowDiv);
    });
  };

  // initial display of both boards
  renderBoard(human.playerBoard.board, playerBoard);
  renderBoard(computer.playerBoard.board, computerBoard);

  // computer makes a random move
  const computerTurn = (board, container) => {
    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    const x = randomMove[0];
    const y = randomMove[1];
    board.receiveAttack(x, y);
    renderBoard(board.board, container);
    availableMoves.splice(availableMoves.indexOf(randomMove), 1);
    if (board.allSunk()) {
      alert('Computer wins!');
      const clone = computerBoard.cloneNode(true);
      computerBoard.parentNode.replaceChild(clone, computerBoard);
    }
  };

  // allow player to click on board to send move
  const playerTurn = (board, container) => {
    const containerContent = container;
    containerContent.addEventListener('click', (e) => {
      if (e.target.classList.contains('cell')) {
        // get coordinates of cell clicked
        const x = [...e.target.parentNode.parentNode.children].indexOf(e.target.parentNode);
        const y = [...e.target.parentNode.children].indexOf(e.target);
        board.receiveAttack(x, y);
        renderBoard(board.board, container);
        if (board.allSunk()) {
          alert('You win!');
          const clone = computerBoard.cloneNode(true);
          computerBoard.parentNode.replaceChild(clone, computerBoard);
        } else {
          computerTurn(human.playerBoard, playerBoard);
        }
      }
    });
  };

  // start turn for game
  playerTurn(computer.playerBoard, computerBoard);
};

game();
