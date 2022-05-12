import { player } from "../FactoryFunctions/Player";
import { gameBoard } from "../FactoryFunctions/Gameboard";

test("getName method should return the name of the player", () => {
  expect(player("Kobe").getName()).toBe("Kobe");
});

test("setName method should change the name of the player", () => {
  expect(player("Kobe").setName("Mike")).toBe("Mike");
});

test("attackEnemy method should mark the given coordinate of the enemy board as hit", () => {
  const player1 = player("1");
  const player2GameBoard = gameBoard();
  player1.attackEnemy(player2GameBoard, 0);
  expect(player2GameBoard.getBoard()[0].isHit).toBeTruthy();
});
