import { gameBoard } from "../Modules/Gameboard";

test("getBoard method should return an array of arrays", () => {
  expect(gameBoard().getBoard()).toEqual([
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});

// placement method tests

test("placement method should place ships on specific coordinates X axis", () => {
  const br = gameBoard();
  br.shipPlacement(4, { x: 0, y: 0 }, "X");
  expect(br.getBoard()).toEqual([
    [
      "carrier",
      "carrier",
      "carrier",
      "carrier",
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});

test("placement method should place ships on specific coordinates Y axis", () => {
  const br = gameBoard();
  br.shipPlacement(4, { x: 0, y: 0 }, "Y");
  expect(br.getBoard()).toEqual([
    ["carrier", null, null, null, null, null, null, null, null, null],
    ["carrier", null, null, null, null, null, null, null, null, null],
    ["carrier", null, null, null, null, null, null, null, null, null],
    ["carrier", null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});

test("placement method shouldnt place ships if there isn't enough space", () => {
  const br = gameBoard();
  br.shipPlacement(4, { x: 0, y: 7 }, "X");
  expect(br.getBoard()).toEqual([
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});

// checkBoard method tests

test("checkBoard: true if board is populated, false if board isnt", () => {
  const board = gameBoard();
  board.shipPlacement(2, { x: 0, y: 0 }, "X");
  expect(board.checkBoard(2, { x: 0, y: 0 }, "X")).toBeFalsy();
});
