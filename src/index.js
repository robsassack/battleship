import './style.css';

const ship = require('./ship');
const player = require('./player');

const game = () => {
  const playerBoard = document.querySelector('#playerBoard');
  const computerBoard = document.querySelector('#computerBoard');

  // reset message display
  const playerMessage = document.querySelector('.player-message');
  playerMessage.innerText = '';
  playerMessage.style.visibility = 'hidden';
  const computerMessage = document.querySelector('.computer-message');
  computerMessage.innerText = '';
  computerMessage.style.visibility = 'hidden';

  // creation of players
  const human = player();
  const computer = player();

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
        } if (board[x][y][0] === 'X') {
          cellDiv.classList.add('hit');
          cellDiv.innerText = '•';
        }
      });
      container.appendChild(rowDiv);
    });
  };

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

  const placement = [5, 4, 3, 3, 2];
  // drag and drop interface for player ship placement
  const playerSetup = () => {
    const compContainer = document.querySelector('.computerContainer');
    const shipContainer = document.querySelector('.shipContainer');
    shipContainer.style.display = 'block';
    compContainer.style.display = 'none';
    playerBoard.addEventListener('click', (e) => {
      if (e.target.classList.contains('cell')) {
        // get coordinates of cell clicked
        const x = [...e.target.parentNode.parentNode.children].indexOf(e.target.parentNode);
        const y = [...e.target.parentNode.children].indexOf(e.target);
        human.playerBoard.placeShip(ship(placement[0]), x, y, 'horizontal');
        renderBoard(human.playerBoard.board, playerBoard);
        placement.shift();
        // if all ships placed, start game
        if (placement.length === 0) {
          compContainer.style.display = 'block';
          shipContainer.style.display = 'none';
        }
      }
    });
  };
  playerSetup();

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

  // initial display of both boards
  renderBoard(human.playerBoard.board, playerBoard);
  renderBoard(computer.playerBoard.board, computerBoard);

  // display winner screen with restart button
  const displayWinner = (winner) => {
    const winnerScreen = document.createElement('div');
    winnerScreen.classList.add('winner-screen');
    if (winner === 'human') {
      winnerScreen.appendChild(document.createElement('p'));
      winnerScreen.querySelector('p').innerText = 'You win!';
    } else if (winner === 'computer') {
      winnerScreen.appendChild(document.createElement('p'));
      winnerScreen.querySelector('p').innerText = 'Computer wins!';
    }
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Play again?';
    restartButton.addEventListener('click', () => {
      window.location.reload();
    });
    winnerScreen.appendChild(restartButton);
    document.querySelector('body').appendChild(winnerScreen);
  };

  // computer makes a random move
  const computerTurn = (board, container) => {
    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    const x = randomMove[0];
    const y = randomMove[1];
    board.receiveAttack(x, y);

    const messageDisplay = document.querySelector('.player-message');
    messageDisplay.innerText = '';
    messageDisplay.style.visibility = 'hidden';
    // display message that a ship has been sunk
    if (board.board[x][y][0] === 'X') {
      if (board.board[x][y][1].isSunk()) {
        messageDisplay.innerText = `Computer sunk a ${board.board[x][y][1].length} length ship!`;
        messageDisplay.style.visibility = 'visible';
      }
    }

    renderBoard(board.board, container);
    availableMoves.splice(availableMoves.indexOf(randomMove), 1);
    if (board.allSunk()) {
      const clone = computerBoard.cloneNode(true);
      computerBoard.parentNode.replaceChild(clone, computerBoard);
      displayWinner('computer');
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

        const messageDisplay = document.querySelector('.computer-message');
        messageDisplay.innerText = '';
        messageDisplay.style.visibility = 'hidden';
        // display message that a ship has been sunk
        if (board.board[x][y][0] === 'X') {
          if (board.board[x][y][1].isSunk()) {
            messageDisplay.innerText = `You sunk a ${board.board[x][y][1].length} length ship!`;
            messageDisplay.style.visibility = 'visible';
          }
        }

        renderBoard(board.board, container);
        if (board.allSunk()) {
          const clone = computerBoard.cloneNode(true);
          computerBoard.parentNode.replaceChild(clone, computerBoard);
          displayWinner('human');
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
