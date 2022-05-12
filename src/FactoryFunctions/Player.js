import { gameBoard } from "./Gameboard";
function player(name, playing) {
  const playerInfo = {
    name,
    board: gameBoard(),
    playing,
  };

  const whoIsPlaying = () => {
    return playerInfo.playing;
  };

  const switchRoles = () => {
    playerInfo.playing = !playerInfo.playing;
  };

  const getName = () => {
    return playerInfo.name;
  };

  const setName = (value) => {
    return (playerInfo.name = value);
  };

  const attackEnemy = (enemyBoard, shot) => {
    enemyBoard.receiveAttack(shot);
  };

  return {
    getName,
    setName,
    attackEnemy,
    whoIsPlaying,
    switchRoles,
  };
}

export { player };
