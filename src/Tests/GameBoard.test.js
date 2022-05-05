import { gameBoard } from "../Modules/Gameboard";
import { ships } from "../Modules/Ships";

test("getBoard method should return an array of arrays", () => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push({ hasShip: false, isHit: false });
  }
  expect(gameBoard().getBoard()).toEqual(array);
});

// shipLocation tests

test("shipLocation method should return an array of numbers X axis", () => {
  expect(
    gameBoard().shipLocation("horizontal", 10, [null, null, null, null])
  ).toEqual([10, 11, 12, 13]);
});

test("shipLocation method should return an array of numbers X axis", () => {
  expect(
    gameBoard().shipLocation("vertical", 10, [null, null, null, null])
  ).toEqual([10, 20, 30, 40]);
});

// shipPlacement tests

test("shipPlacement method should place ships at the indexes given by the shipLocation method X axis", () => {
  const br = gameBoard();
  br.shipPlacement("horizontal", 0, [null, null]);
  const array = br.getBoard();
  expect(array[0].hasShip).toBeTruthy();
  expect(array[1].hasShip).toBeTruthy();
  expect(array[3].hasShip).toBeFalsy();
});

test("shipPlacement method should place ships at the indexes given by the shipLocation method Y axis", () => {
  const br = gameBoard();
  br.shipPlacement("vertical", 0, [null, null]);
  const array = br.getBoard();
  expect(array[0].hasShip).toBeTruthy();
  expect(array[10].hasShip).toBeTruthy();
});

// receiveAttack tests

test("receiveAttack method should mark the coordinate given as hit (hasShip: false)", () => {
  const br = gameBoard();
  br.receiveAttack(0);
  const array = br.getBoard();
  expect(array[0].isHit).toBeTruthy();
  expect(array[5].isHit).toBeFalsy();
});

test("receiveAttack method should keep track of missed shots", () => {
  const br = gameBoard();
  br.receiveAttack(50);
  const array = br.getBoard();
  expect(array[50].missedShot).toBeTruthy();
});
