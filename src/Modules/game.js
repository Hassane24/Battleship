import { gameBoard } from "../FactoryFunctions/Gameboard";
import { player } from "../FactoryFunctions/Player";
import { computerPlayer } from "../FactoryFunctions/ComputerPlayer";

function game(name) {
  let humanPlayer = player(name, true);
  let cpuPlayer = computerPlayer(false);
  let humanBoard = gameBoard();
  let cpuBoard = gameBoard();
  let shipToPlace = 0;

  const getPlayerFleet = () => {
    return humanBoard.getFleet();
  };

  const getPlayerShipLocations = () => {
    return humanBoard.getShipLocations();
  };

  const getCPUFleet = () => {
    return cpuBoard.getFleet();
  };

  const getShipToPlace = () => {
    const fleet = getPlayerFleet();
    const ship = fleet[shipToPlace];
    return ship;
  };

  const placeCPUShips = () => {
    const cpuFleet = getCPUFleet();
    for (let ship = 0; ship < cpuFleet.length; ship++)
      cpuBoard.randomShipPlacement(cpuFleet[ship]);
  };

  const placePlayerShips = (location, axis) => {
    const playerFleet = getPlayerFleet();
    shipToPlace += 1;
    return humanBoard.shipPlacement(axis, location, playerFleet[shipToPlace]);
  };

  const checkIfAllShipsArePlaced = () => {
    return getPlayerFleet().length === shipToPlace;
  };

  const playerAttack = (coordinate) => {
    humanPlayer.attackEnemy(cpuBoard, coordinate);
  };

  const cpuAttack = () => {
    cpuPlayer.attackEnemy(humanBoard);
  };

  const playerWon = () => {
    return cpuBoard.checkShipState();
  };

  const cpuWon = () => {
    return humanBoard.checkShipState();
  };

  const playerRole = () => {
    return humanPlayer.whoIsPlaying();
  };

  const cpuRole = () => {
    return cpuPlayer.whoIsPlaying();
  };

  const switchPlayersRoles = () => {
    if (playerRole()) {
      humanPlayer.switchRoles();
      cpuPlayer.switchRoles();
    } else {
      humanPlayer.switchRoles();
      cpuPlayer.switchRoles();
    }
  };

  const isValidPlacement = (location) => {
    humanBoard.checkForValidPlacement(location);
  };

  return {
    getPlayerFleet,
    getPlayerShipLocations,
    getCPUFleet,
    placeCPUShips,
    getShipToPlace,
    placePlayerShips,
    checkIfAllShipsArePlaced,
    playerAttack,
    cpuAttack,
    playerWon,
    cpuWon,
    playerRole,
    cpuRole,
    switchPlayersRoles,
    isValidPlacement,
  };
}

export { game };
