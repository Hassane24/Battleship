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

  const getCPUFleet = () => {
    return cpuBoard.getFleet();
  };

  const placeCPUShips = () => {
    const cpuFleet = getCPUFleet();
    for (let i = 0; i < cpuFleet.length; i++)
      cpuBoard.randomShipPlacement(cpuFleet[i]);
  };

  const placePlayerShips = (location, axis) => {
    const playerFleet = getPlayerFleet();
    humanBoard.shipPlacement(axis, location, playerFleet[shipToPlace]);
    shipToPlace += 1;
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
}
