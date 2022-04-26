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
  };
  const getBoard = () => {
    return gameboard.board;
  };
  const shipPlacement = (length, { x, y }, orientation) => {
    if (orientation === "X" && checkBoard(length, { x, y }, orientation)) {
      for (let i = y; i < length; i++) {
        gameboard.board[x][i] = "carrier";
      }
    }

    if (orientation === "Y" && checkBoard(length, { x, y }, orientation)) {
      for (let i = x; i < length; i++) {
        gameboard.board[i][y] = "carrier";
      }
    }
  };

  const checkBoard = (length, { x, y }, orientation) => {
    const board = getBoard();
    if (orientation === "X") {
      for (let i = y; i < length; i++) {
        if (board[x][i] === null) return true;
        else return false;
      }
    }

    if (orientation === "Y") {
      for (let i = x; i < length; i++) {
        if (board[i][y] === null) return true;
        else return false;
      }
    }
  };

  return { getBoard, shipPlacement, checkBoard };
}

export { gameBoard };
