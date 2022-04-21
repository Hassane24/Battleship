import { ships } from "../Modules/Ships";

test("getLength method should return the length of the ship", () => {
  expect(ships("carrier", 5).getLength()).toBe(5);
});

test("getName method should return the name of the ship", () => {
  expect(ships("carrier", 5).getName()).toBe("carrier");
});

test("getPosition method should return the position of the ship", () => {
  expect(ships("carrier", 5).getPosition()).toEqual([
    null,
    null,
    null,
    null,
    null,
  ]);
});

test("shipState method should return the state of the ship", () => {
  expect(ships("carrier", 5).shipState()).toBeFalsy();
});

test("hit method should mark the given index as 'hit' in the position array", () => {
  const carrier = ships("carrier", 5);
  carrier.hit(4);
  expect(carrier.getPosition()).toEqual([null, null, null, null, "hit"]);
});

test("isSunk method should switch the shipState to true if all positions are marked as 'hit'", () => {
  const carrier = ships("carrier", 1);
  carrier.hit(0);
  carrier.hit(1);
  carrier.isSunk();
  expect(carrier.shipState()).toBeTruthy();
});
