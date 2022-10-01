const ship = require('../ship');

test('new ship isn\'t sunk', () => {
  const newShip = ship(3);
  expect(newShip.isSunk()).toBe(false);
});

test('ship with 3 hits is sunk', () => {
  const newShip = ship(3);
  newShip.hit(0);
  newShip.hit(1);
  newShip.hit(2);
  expect(newShip.isSunk()).toBe(true);
});

test('ship with 2 hits isn\'t sunk', () => {
  const newShip = ship(3);
  newShip.hit(0);
  newShip.hit(1);
  expect(newShip.isSunk()).toBe(false);
});
