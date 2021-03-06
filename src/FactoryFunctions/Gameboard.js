import { ships } from "./Ships";
function gameBoard() {
  const gameboard = {
    board: Array(100).fill({ hasShip: false, isHit: false }),
    fleet: [
      ships("carrier", 5),
      ships("battleship", 4),
      ships("cruiser", 3),
      ships("submarine", 3),
      ships("destroyer", 2),
    ],
    locations: [],
  };

  const getBoard = () => {
    return gameboard.board;
  };

  const getShipLocations = () => {
    return gameboard.locations.flat();
  };

  const getFleet = () => {
    return gameboard.fleet;
  };

  const shipLocation = (orientation, startingPosition, ship) => {
    // returns an array of numbers that represent indexes on the board
    const location = [];
    for (let i = 0; i < ship.getLength(); i++) {
      orientation === "horizontal"
        ? location.push(startingPosition + i)
        : location.push(startingPosition + i * 10);
    }
    return location;
  };

  const shipPlacement = (orientation, startingPosition, Ship) => {
    const location = shipLocation(orientation, startingPosition, Ship);
    for (let j = 0; j < location.length; j++) {
      gameboard.board.splice(location[j], 1, {
        hasShip: true,
        isHit: false,
        ship: Ship,
      });
    }
    gameboard.locations.push(location);
    return location;
  };

  const checkForValidPlacement = (locationArray) => {
    const collisions = [9, 19, 29, 39, 49, 59, 69, 79, 89];
    if (locationArray.some((loc) => !gameboard.board[loc])) {
      return false;
    } else if (locationArray.some((loc) => gameboard.board[loc].hasShip)) {
      return false;
    } else if (
      collisions.some((num) => {
        return [num, num + 1].every((combination) =>
          locationArray.includes(combination)
        );
      })
    ) {
      return false;
    } else {
      return true;
    }
  };

  const randomShipPlacement = (ship) => {
    let allPossibleLocations = [];

    // returns a random orientation

    const randomOrientation = () =>
      ["horiz", "vert"][Math.floor(Math.random() * 2)];

    // finds all possible locations a ship can be placed at

    const findAllPossibleLocations = (orientation) => {
      for (let i = 0; i < 100 - ship.getLength(); i++) {
        let locationArray = [];

        if (orientation === "horiz")
          for (let j = 0; j < ship.getLength(); j++) {
            locationArray.push(i + j);
          }
        else
          for (let j = 0; j < ship.getLength(); j++) {
            locationArray.push(i + j * 10);
          }

        // checks whether the created location is valid or not

        if (checkForValidPlacement(locationArray))
          allPossibleLocations.push(locationArray);
      }

      // returns one random ship location out of many

      return allPossibleLocations[
        Math.floor(Math.random() * allPossibleLocations.length)
      ];
    };

    let location = findAllPossibleLocations(randomOrientation());
    for (let j = 0; j < location.length; j++) {
      gameboard.board.splice(location[j], 1, {
        hasShip: true,
        isHit: false,
        ship: ship,
      });
    }
    gameboard.locations.push(location);
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

  const getMisses = () => {
    const board = gameboard.board;
    const misses = [];
    for (let i = 0; i < board.length; i++)
      if (board[i].missedShot) misses.push(i);
    return misses;
  };

  const getHits = () => {
    const board = gameboard.board;
    const hits = [];
    for (let i = 0; i < board.length; i++) {
      if (board[i].hasShip && board[i].isHit) hits.push(i);
    }
    return hits;
  };

  return {
    getBoard,
    getFleet,
    getShipLocations,
    shipPlacement,
    receiveAttack,
    checkShipState,
    checkForValidPlacement,
    randomShipPlacement,
    getHits,
    getMisses,
  };
}

export { gameBoard };
