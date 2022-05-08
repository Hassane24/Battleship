import { gameBoard } from "./Gameboard";
function player(name = "computer") {
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

function computerPlayer() {
  let indexes = [];
  function randomIndex() {
    let index = Math.floor(Math.random(1 * 100));
    indexes.push(index);
  }

  function checkRandomIndex(value, array) {
    for (let i = 0; i < array.length; i++) {
      if (value == array[i]) return false;
      return true;
    }
  }
  return { ...player(), checkRandomIndex };
}

export { player, computerPlayer };
