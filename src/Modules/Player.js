import { gameBoard } from "./Gameboard";
function player(name) {
  const playerInfo = {
    name,
    board: gameBoard(),
  };

  const getName = () => {
    return playerInfo.name;
  };

  const getPlayerGb = () => {
    return playerInfo.board;
  };

  const setName = (value) => {
    return (playerInfo.name = value);
  };

  const attackEnemy = (enemyBoard, shot) => {
    enemyBoard.receiveAttack(shot);
  };

  return { getName, setName, getPlayerGb, attackEnemy };
}

export { player };
