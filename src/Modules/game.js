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

  const getPlayerName = () => {
    return humanPlayer.getName();
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
    humanBoard.shipPlacement(axis, location, playerFleet[shipToPlace]);
    shipToPlace += 1;
  };

  const checkIfAllShipsArePlaced = () => {
    return getPlayerFleet().length === shipToPlace;
  };

  const playerAttack = (coordinate) => {
    if (playerRole()) {
      humanPlayer.attackEnemy(cpuBoard, coordinate);
      switchPlayersRoles();
    }
  };

  const cpuAttack = () => {
    if (cpuRole()) {
      cpuPlayer.attackEnemy(humanBoard);
      switchPlayersRoles();
    }
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
    return humanBoard.checkForValidPlacement(location);
  };

  const getPlayerMisses = () => {
    return cpuBoard.getMisses();
  };

  const getCpuMisses = () => {
    return humanBoard.getMisses();
  };

  const getPlayerHits = () => {
    return cpuBoard.getHits();
  };

  const getCpuHits = () => {
    return humanBoard.getHits();
  };

  return {
    getPlayerFleet,
    getPlayerName,
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
    getPlayerMisses,
    getCpuMisses,
    getPlayerHits,
    getCpuHits,
  };
}

export { game };
