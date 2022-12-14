const ship = require('../ship');
const gameboard = require('../gameboard');

test('ship is placed on gameboard', () => {
  const newGameboard = gameboard();
  const newShip = ship(3);
  newGameboard.placeShip(newShip, 0, 0, 'horizontal');
  expect(newGameboard.board[0][0][0]).toBe(newShip);
});

test('multiple ships placed on gameboard', () => {
  const newGameboard = gameboard();
  const newShip = ship(3);
  const newShip2 = ship(4);
  newGameboard.placeShip(newShip, 0, 0, 'horizontal');
  newGameboard.placeShip(newShip2, 0, 3, 'horizontal');
  expect(newGameboard.board[0][0][0]).toBe(newShip);
  expect(newGameboard.board[0][3][0]).toBe(newShip2);
});

test('do not allow ships to overlap', () => {
  const newGameboard = gameboard();
  const ship1 = ship(3);
  newGameboard.placeShip(ship1, 0, 0, 'horizontal');
  const ship2 = ship(3);
  expect(() => newGameboard.placeShip(ship2, 0, 0, 'vertical')).toThrow();
});

test('do not allow ships to go off the board', () => {
  const newGameboard = gameboard();
  const newShip = ship(3);
  expect(() => newGameboard.placeShip(newShip, 100, 100, 'horizontal')).toThrow();
});

test('receive attack on empty space', () => {
  const newGameboard = gameboard();
  newGameboard.receiveAttack(0, 0);
  expect(newGameboard.board[0][0]).toBe(1);
});

test('prevent attacks on already attacked space', () => {
  const newGameboard = gameboard();
  newGameboard.receiveAttack(0, 0);
  expect(() => newGameboard.receiveAttack(0, 0)).toThrow();
});

test('receive attack on ship', () => {
  const newGameboard = gameboard();
  const newShip = ship(3);
  newGameboard.placeShip(newShip, 0, 0, 'horizontal');
  newGameboard.receiveAttack(0, 0);
  expect(newGameboard.board[0][0]).toBe('X');
  expect(newShip.isSunk()).toBe(false);
});

test('receive attack on ship and sink it', () => {
  const newGameboard = gameboard();
  const newShip = ship(3);
  newGameboard.placeShip(newShip, 0, 0, 'horizontal');
  newGameboard.receiveAttack(0, 0);
  newGameboard.receiveAttack(0, 1);
  newGameboard.receiveAttack(0, 2);
  expect(newGameboard.board[0][0]).toBe('X');
  expect(newShip.isSunk()).toBe(true);
});

test('all ships are sunk', () => {
  const newGameboard = gameboard();
  const ship1 = ship(3);
  const ship2 = ship(3);
  newGameboard.placeShip(ship1, 0, 0, 'horizontal');
  newGameboard.placeShip(ship2, 3, 3, 'vertical');
  newGameboard.receiveAttack(0, 0);
  newGameboard.receiveAttack(0, 1);
  newGameboard.receiveAttack(0, 2);
  newGameboard.receiveAttack(3, 3);
  newGameboard.receiveAttack(4, 3);
  newGameboard.receiveAttack(5, 3);
  expect(newGameboard.allSunk()).toBe(true);
});

test('not all ships are sunk', () => {
  const newGameboard = gameboard();
  const ship1 = ship(3);
  const ship2 = ship(3);
  newGameboard.placeShip(ship1, 0, 0, 'horizontal');
  newGameboard.placeShip(ship2, 3, 3, 'vertical');
  newGameboard.receiveAttack(0, 0);
  newGameboard.receiveAttack(0, 1);
  newGameboard.receiveAttack(0, 2);
  newGameboard.receiveAttack(3, 3);
  newGameboard.receiveAttack(4, 3);
  expect(newGameboard.allSunk()).toBe(false);
});
