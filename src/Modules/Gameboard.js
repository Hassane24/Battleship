import { ships } from "./Ships";
function gameBoard() {
  const gameboard = {
    board: [
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
    ],
    shipsMade: [],
  };

  const addShips = () => {};

  const getBoard = () => {
    return gameboard.board;
  };

  const shipPlacement = (length, { x, y }, orientation) => {
    if (10 - x < length || 10 - y < length) return; // if there isnt enough space STOP!!
    if (orientation === "X" && checkBoard(length, { x, y }, orientation)) {
      for (let i = y; i < length + y; i++) {
        gameboard.board[x][i] = "carrier";
      }
    }

    if (orientation === "Y" && checkBoard(length, { x, y }, orientation)) {
      for (let i = x; i < length + x; i++) {
        gameboard.board[i][y] = "carrier";
      }
    }
  };

  const checkBoard = (length, { x, y }, orientation) => {
    const board = getBoard();
    if (orientation === "X") {
      for (let i = y; i < length + y; i++) {
        if (board[x][i] === null) return true;
        else return false;
      }
    }

    if (orientation === "Y") {
      for (let i = x; i < length + x; i++) {
        if (board[i][y] === null) return true;
        else return false;
      }
    }
  };

  return { getBoard, shipPlacement, checkBoard };
}

export { gameBoard };
