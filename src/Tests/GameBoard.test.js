import { gameBoard } from "../Modules/Gameboard";
import { ships } from "../Modules/Ships";

test("getBoard method should return an array of arrays", () => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push({ hasShip: false, isHit: false });
  }
  expect(gameBoard().getBoard()).toEqual(array);
});

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

test("shipPlacement method should place ships at the indexes given by the shipLocation method Y axis", () => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    if (i == 0 || i == 1)
      array.push({ hasShip: true, isHit: false, shipName: "destroyer" });
    else array.push({ hasShip: false, isHit: false });
  }
  const br = gameBoard();
  br.shipPlacement("horizontal", 0, [null, null]);
  expect(br.getBoard()).toEqual(array);
});

test("shipPlacement method should place ships at the indexes given by the shipLocation method Y axis", () => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    if (i == 0 || i == 10)
      array.push({ hasShip: true, isHit: false, shipName: "destroyer" });
    else array.push({ hasShip: false, isHit: false });
  }
  const br = gameBoard();
  br.shipPlacement("vertical", 0, [null, null]);
  expect(br.getBoard()).toEqual(array);
});
