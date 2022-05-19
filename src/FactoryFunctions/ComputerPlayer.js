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

  const includes = (coordinates, coordinate) =>
    coordinates.some((cell) => cell.toString() === coordinate.toString());

  const randomIndex = () => Math.floor(Math.random() * 100);

  const checkRandomIndex = (board) => {
    let coordiate;
    coordiate = randomIndex();
    const damagedCells = [...board.getMisses(), ...board.getHits()];
    while (includes(damagedCells, coordiate)) coordiate = randomIndex();
    return coordiate;
  };
  const attackEnemy = (enemyBoard) => {
    enemyBoard.receiveAttack(checkRandomIndex(enemyBoard));
  };

  return { getName, attackEnemy, whoIsPlaying, switchRoles };
}
export { computerPlayer };
