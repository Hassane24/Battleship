import { player } from "../Modules/Player";

test("whoIsPlaying method returns true if it's someone's role and false if it isnt", () => {
  expect(player().whoIsPlaying()).toBeFalsy();
  expect(player(true).whoIsPlaying()).toBeTruthy();
});

test("switchRole method should reverse the boolean value of state.playing", () => {
  expect(player().switchRoles()).toBeTruthy();
  expect(player(true).switchRoles()).toBeFalsy();
});
