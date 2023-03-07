/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gameboard from "./gameboard";
import ship from "./ship";

let gb1;
beforeEach(() => {
  gb1 = gameboard();
});

test("ships: contains 5 ships", () => {
  expect(gb1.ships.carrier).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.ships.battleship).toEqual(
    expect.objectContaining({
      name: "battleship",
    })
  );
  expect(gb1.ships.destroyer).toEqual(
    expect.objectContaining({
      name: "destroyer",
    })
  );
  expect(gb1.ships.submarine).toEqual(
    expect.objectContaining({
      name: "submarine",
    })
  );
  expect(gb1.ships.patrol).toEqual(
    expect.objectContaining({
      name: "patrol",
    })
  );
});

test("placeShip: vertical", () => {
  gb1.placeShip(gb1.ships.carrier, "a", 10, "vertical");
  gb1.placeShip(gb1.ships.destroyer, "c", 1, "vertical");
  expect(gb1.board.a[10].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.board.a[9].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.board.a[8].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.board.a[7].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.board.a[6].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.board.c[1].owner).toEqual(
    expect.objectContaining({
      name: "destroyer",
    })
  );
  expect(gb1.board.c[2].owner).toEqual(
    expect.objectContaining({
      name: "destroyer",
    })
  );
  expect(gb1.board.c[3].owner).toEqual(
    expect.objectContaining({
      name: "destroyer",
    })
  );
  expect(gb1.board.c[4].owner).toEqual(
    expect.objectContaining({
      name: "destroyer",
    })
  );
});

test("placeShip: horizontal", () => {
  gb1.placeShip(gb1.ships.carrier, "a", 10, "horizontal");
  gb1.placeShip(gb1.ships.patrol, "c", 3, "horizontal");
  gb1.placeShip(gb1.ships.submarine, "j", 1, "horizontal");
  expect(gb1.board.a[10].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.board.b[10].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.board.c[10].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.board.d[10].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.board.e[10].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.board.c[3].owner).toEqual(
    expect.objectContaining({
      name: "patrol",
    })
  );
  expect(gb1.board.d[3].owner).toEqual(
    expect.objectContaining({
      name: "patrol",
    })
  );
  expect(gb1.board.j[1].owner).toEqual(
    expect.objectContaining({
      name: "submarine",
    })
  );
  expect(gb1.board.i[1].owner).toEqual(
    expect.objectContaining({
      name: "submarine",
    })
  );
  expect(gb1.board.h[1].owner).toEqual(
    expect.objectContaining({
      name: "submarine",
    })
  );
  console.log(gb1.board);
});
