import { ships } from "../Modules/Ships";

test("Check the whole object", () => {
  expect(ships("carrier", [1, 5, 6])).toEqual({
    sunken: false,
    name: "carrier",
    position: [1, 5, 6],
    hits: [],
    length: 3,
  });
});

test("", () => {});
