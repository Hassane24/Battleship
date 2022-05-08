import { player, computerPlayer } from "../Modules/Player";

test("getName method should return the name of the player", () => {
  expect(player("Kobe").getName()).toBe("Kobe");
});

test("setName method should change the name of the player", () => {
  expect(player("Kobe").setName("Mike")).toBe("Mike");
});

test("attackEnemy method should mark the given coordinate of the enemy board as hit", () => {
  const player1 = player("1");
  const player2 = player("2");
  const player2Board = player2.getPlayerGb().getBoard();
  player1.attackEnemy(player2.getPlayerGb(), 0);
  expect(player2Board[0].isHit).toBeTruthy();
});

test("checkRandomIndex return false if that index have been created before and true if it hasn't", () => {
  expect(computerPlayer().checkRandomIndex(6, [1, 2, 3])).toBeTruthy();
});
