/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gameboard from "./gameboard";

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
  gb1.placeShip(gb1.ships.destroyer, "a", 10, "vertical");
  gb1.placeShip(gb1.ships.carrier, "c", 1, "vertical");
  expect(gb1.board.a[10].owner).toEqual(
    expect.objectContaining({
      name: "destroyer",
    })
  );
  expect(gb1.board.a[9].owner).toEqual(
    expect.objectContaining({
      name: "destroyer",
    })
  );
  expect(gb1.board.a[8].owner).toEqual(
    expect.objectContaining({
      name: "destroyer",
    })
  );
  expect(gb1.board.c[1].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.board.c[2].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
    })
  );
  expect(gb1.board.c[3].owner).toEqual(
    expect.objectContaining({
      name: "carrier",
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
});

test("recieveAttack: board recieves hit and state of hit", () => {
  gb1.placeShip(gb1.ships.carrier, "a", 10, "horizontal");
  gb1.placeShip(gb1.ships.destroyer, "c", 1, "vertical");
  gb1.recieveAttack("c", 3);
  gb1.recieveAttack("c", 5);
  expect(gb1.ships.destroyer.nHits).toBe(1);
  expect(gb1.board.c[3].hit).toBe(1);
  expect(gb1.board.c[5].hit).toBe(0);
});

test("reportSunk: checks correctly for sunk status", () => {
  gb1.placeShip(gb1.ships.carrier, "a", 4, "horizontal");
  gb1.recieveAttack("a", 4);
  gb1.recieveAttack("b", 4);
  gb1.recieveAttack("c", 4);
  gb1.recieveAttack("d", 4);
  gb1.recieveAttack("e", 4);
  gb1.placeShip(gb1.ships.battleship, "f", 9, "vertical");
  gb1.recieveAttack("f", 9);
  gb1.recieveAttack("f", 8);
  gb1.recieveAttack("f", 7);
  gb1.recieveAttack("f", 6);
  gb1.placeShip(gb1.ships.destroyer, "i", 4, "vertical");
  gb1.recieveAttack("i", 4);
  gb1.recieveAttack("i", 3);
  gb1.recieveAttack("i", 2);
  gb1.placeShip(gb1.ships.submarine, "i", 10, "vertical");
  gb1.recieveAttack("i", 10);
  gb1.recieveAttack("i", 9);
  gb1.recieveAttack("i", 8);
  gb1.placeShip(gb1.ships.patrol, "b", 8, "horizontal");
  gb1.recieveAttack("b", 8);
  gb1.recieveAttack("c", 8);
  expect(gb1.reportSunk()).toBe(true);
});

test("clearShip", () => {
  gb1.placeShip(gb1.ships.carrier, "a", 4, "horizontal");
  expect(gb1.board.a[4].owner).toBe(gb1.ships.carrier);
  gb1.clearShip(gb1.ships.carrier);
  expect(gb1.board.a[4].owner).toBe(null);
  gb1.placeShip(gb1.ships.carrier, "f", 9, "vertical");
  expect(gb1.board.f[9].owner).toBe(gb1.ships.carrier);
});

test("moveShip", () => {
  gb1.placeShip(gb1.ships.carrier, "a", 4, "horizontal");
  gb1.moveShip("f", 9, "vertical", gb1.ships.carrier);
  expect(gb1.board.a[4].owner).toBe(null);
  expect(gb1.board.f[9].owner).toBe(gb1.ships.carrier);
});
