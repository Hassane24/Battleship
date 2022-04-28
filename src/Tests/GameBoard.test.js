import { gameBoard } from "../Modules/Gameboard";
import { ships } from "../Modules/Ships";

test("getBoard method should return an array of arrays", () => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push({ hasShip: false, isHit: false });
  }
  expect(gameBoard().getBoard()).toEqual(array);
});

test("shipPlacement method should return an array of numbers X axis", () => {
  expect(
    gameBoard().shipLocation("horizontal", 10, [null, null, null, null])
  ).toEqual([10, 11, 12, 13]);
});

test("shipPlacement method should return an array of numbers X axis", () => {
  expect(
    gameBoard().shipLocation("vertical", 10, [null, null, null, null])
  ).toEqual([10, 20, 30, 40]);
});
