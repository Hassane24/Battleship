import { ships } from "./Ships";
function gameBoard() {
  const gameboard = {
    board: Array(100).fill({ hasShip: false, isHit: false }),
    shipsMade: [],
  };

  const addShips = () => {};

  const getBoard = () => {
    return gameboard.board;
  };

  const shipLocation = (orientation, startingPosition, ship) => {
    // returns an array of numbers that represent indexes
    const location = [];
    for (let i = 0; i < ship.length; i++) {
      orientation === "horizontal"
        ? location.push(startingPosition + i)
        : location.push(startingPosition + i * 10);
    }
    return location;
  };

  return { getBoard, shipLocation };
}

export { gameBoard };
