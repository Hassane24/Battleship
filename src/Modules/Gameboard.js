import { ships } from "./Ships";
function gameBoard() {
  const gameboard = {
    board: Array(100).fill({ hasShip: false, isHit: false }),
    shipStore: [
      ships("carrier", 5),
      ships("battleship", 4),
      ships("cruiser", 3),
      ships("submarine", 3),
      ships("destroyer", 2),
    ],
  };

  const getBoard = () => {
    return gameboard.board;
  };

  const shipLocation = (orientation, startingPosition, ship) => {
    // returns an array of numbers that represent indexes
    const location = [];
    for (let i = 0; i < ship.getLength(); i++) {
      orientation === "horizontal"
        ? location.push(startingPosition + i)
        : location.push(startingPosition + i * 10);
    }
    return location;
  };

  const shipPlacement = (name, length, orientation, startingPosition, Ship) => {
    Ship = ships(name, length);
    const location = shipLocation(orientation, startingPosition, Ship);
    for (let j = 0; j < location.length; j++) {
      gameboard.board.splice(location[j], 1, {
        hasShip: true,
        isHit: false,
        ship: Ship,
      });
    }
  };

  const receiveAttack = (coordinate) => {
    if (gameboard.board[coordinate].hasShip == false)
      gameboard.board.splice(coordinate, 1, {
        hasShip: false,
        isHit: true,
        missedShot: true,
      });
    else {
      gameboard.board[coordinate].isHit = true;
      gameboard.board[coordinate].ship.hit();
    }
  };

  const checkShipState = () => {
    return gameboard.board
      .filter((el) => el.hasShip)
      .map((el) => el.ship)
      .every((el) => el.isSunk());
  };

  return {
    getBoard,
    shipPlacement,
    receiveAttack,
    checkShipState,
  };
}

export { gameBoard };
