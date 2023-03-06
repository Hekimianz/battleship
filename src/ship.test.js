/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import ship from "./ship";

let patrol;
let submarine;
let destroyer;
let battleship;
let carrier;

beforeEach(() => {
  patrol = ship("patrol", 2);
  submarine = ship("submarine", 3);
  destroyer = ship("destroyer", 3);
  battleship = ship("battleship", 4);
  carrier = ship("carrier", 5);
});

test("hit: adds a hit", () => {
  expect(patrol.hit()).toBe(1);
  expect(patrol.hit()).toBe(2);
  expect(submarine.hit()).toBe(1);
});

test("nHits: counts hits", () => {
  expect(patrol.nHits).toBe(0);
  expect(submarine.nHits).toBe(0);
  patrol.hit();
  submarine.hit();
  submarine.hit();
  expect(patrol.nHits).toBe(1);
  expect(submarine.nHits).toBe(2);
});

test("isSunk: checks if sunk", () => {
  expect(patrol.isSunk()).toBe(false);
  patrol.hit();
  patrol.hit();
  expect(patrol.isSunk()).toBe(true);
  submarine.hit();
  expect(submarine.isSunk()).toBe(false);
});
