import { gameBoard } from "./Gameboard";
function computerPlayer(playing) {
  const playerInfo = {
    name: "computer",
    board: gameBoard(),
    playing,
    shotsFired: [],
  };

  const whoIsPlaying = () => {
    return playerInfo.playing;
  };

  const switchRoles = () => {
    return (playerInfo.playing = !playerInfo.playing);
  };

  const getName = () => {
    return playerInfo.name;
  };

  const randomIndex = () => {
    let index = Math.floor(Math.random() * 100);
    if (checkRandomIndex(index, playerInfo.shotsFired))
      playerInfo.shotsFired.push(index);
    if (!checkRandomIndex(index, playerInfo.shotsFired)) return randomIndex();
    return index;
  };

  const checkRandomIndex = (value, array) => {
    for (let i = 0; i < array.length; i++) {
      if (value == array[i]) return false;
      return true;
    }
  };

  const attackEnemy = (enemyBoard) => {
    enemyBoard.receiveAttack(randomIndex());
  };

  return { getName, attackEnemy, whoIsPlaying, switchRoles };
}
export { computerPlayer };
