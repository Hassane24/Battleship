import { gameBoard } from "../FactoryFunctions/Gameboard";
import { ships, Ships } from "../FactoryFunctions/Ships";

test("getBoard method should return an array of arrays", () => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push({ hasShip: false, isHit: false });
  }
  expect(gameBoard().getBoard()).toEqual(array);
});

// shipPlacement tests

test("shipPlacement method should place ships at the indexes given by the shipLocation method X axis", () => {
  const br = gameBoard();
  const array = br.getBoard();
  br.shipPlacement("horizontal", 0, ships("carrier", 2));

  expect(array[0].hasShip).toBeTruthy();
  expect(array[1].hasShip).toBeTruthy();
  expect(array[3].hasShip).toBeFalsy();
});

test("shipPlacement method should place ships at the indexes given by the shipLocation method Y axis", () => {
  const br = gameBoard();
  const array = br.getBoard();
  br.shipPlacement("vertical", 0, ships("carrier", 2));
  expect(array[0].hasShip).toBeTruthy();
  expect(array[10].hasShip).toBeTruthy();
});

// receiveAttack tests

test("receiveAttack method should mark the coordinate given as hit (hasShip: false)", () => {
  const br = gameBoard();
  const array = br.getBoard();
  br.receiveAttack(0);
  expect(array[0].isHit).toBeTruthy();
  expect(array[0].missedShot).toBeTruthy();

  expect(array[5].isHit).toBeFalsy();
});

test("receiveAttack method should keep track of missed shots", () => {
  const br = gameBoard();
  const array = br.getBoard();
  br.receiveAttack(50);
  expect(array[50].missedShot).toBeTruthy();
});

test("receiveAttack method should invoke the hit method on the ships if they're hit", () => {
  const br = gameBoard();
  const array = br.getBoard();
  br.shipPlacement("vertical", 0, ships("carrier", 2));
  br.receiveAttack(0);
  br.receiveAttack(10);
  expect(array[0].ship.getHits()).toEqual(["hit", "hit"]);
});

test("checkShipState method should return true if all ships have sunk", () => {
  const br = gameBoard();
  br.shipPlacement("vertical", 0, ships("carrier", 2));
  br.receiveAttack(0);
  br.receiveAttack(10);
  expect(br.checkShipState()).toBeTruthy();
});

// checkForValidPlacement tests

test("checkForValidPlacement method shouldn't allow ship placement if a ship collides with another", () => {
  const br = gameBoard();
  const array = br.getBoard();
  array[1].hasShip = true;
  expect(br.checkForValidPlacement([1, 2, 3])).toBeFalsy();
});

test("checkForValidPlacement method shouldn't allow ship placement if a ship exceeds the board limit (X axis)", () => {
  const br = gameBoard();
  const array = br.getBoard();
  expect(br.checkForValidPlacement([99, 100, 101])).toBeFalsy();
});

test("checkForValidPlacement method shouldn't allow ship placement if a ship exceeds the board limit (Y axis)", () => {
  const br = gameBoard();
  const array = br.getBoard();
  expect(br.checkForValidPlacement([99, 109, 119])).toBeFalsy();
});
