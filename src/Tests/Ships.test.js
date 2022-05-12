import { ships } from "../FactoryFunctions/Ships";

test("getLength method should return the length of the ship", () => {
  expect(ships("carrier", 5).getLength()).toBe(5);
});

test("getName method should return the name of the ship", () => {
  expect(ships("carrier", 5).getName()).toBe("carrier");
});

test("getHits method should return the amount of hits", () => {
  expect(ships("carrier", 5).getHits()).toEqual([]);
});

test("shipState method should return the state of the ship", () => {
  expect(ships("carrier", 5).shipState()).toBeFalsy();
});

test("hit method should should push 'hit' in the hits array", () => {
  const carrier = ships("carrier", 5);
  carrier.hit();
  expect(carrier.getHits()).toEqual(["hit"]);
});

test("isSunk method should switch the shipState to true if all positions are marked as 'hit'", () => {
  const carrier = ships("carrier", 1);
  carrier.hit(0);
  carrier.hit(1);
  carrier.isSunk();
  expect(carrier.shipState()).toBeTruthy();
});
