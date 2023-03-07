import shipFac from "./ship";

function gameboard() {
  return {
    ships: {
      carrier: shipFac("carrier", 5),
      battleship: shipFac("battleship", 4),
      destroyer: shipFac("destroyer", 4),
      submarine: shipFac("submarine", 3),
      patrol: shipFac("patrol", 2),
    },
    board: {
      a: {
        1: { hit: null, owner: null },
        2: { hit: null, owner: null },
        3: { hit: null, owner: null },
        4: { hit: null, owner: null },
        5: { hit: null, owner: null },
        6: { hit: null, owner: null },
        7: { hit: null, owner: null },
        8: { hit: null, owner: null },
        9: { hit: null, owner: null },
        10: { hit: null, owner: null },
      },
      b: {
        1: { hit: null, owner: null },
        2: { hit: null, owner: null },
        3: { hit: null, owner: null },
        4: { hit: null, owner: null },
        5: { hit: null, owner: null },
        6: { hit: null, owner: null },
        7: { hit: null, owner: null },
        8: { hit: null, owner: null },
        9: { hit: null, owner: null },
        10: { hit: null, owner: null },
      },
      c: {
        1: { hit: null, owner: null },
        2: { hit: null, owner: null },
        3: { hit: null, owner: null },
        4: { hit: null, owner: null },
        5: { hit: null, owner: null },
        6: { hit: null, owner: null },
        7: { hit: null, owner: null },
        8: { hit: null, owner: null },
        9: { hit: null, owner: null },
        10: { hit: null, owner: null },
      },
      d: {
        1: { hit: null, owner: null },
        2: { hit: null, owner: null },
        3: { hit: null, owner: null },
        4: { hit: null, owner: null },
        5: { hit: null, owner: null },
        6: { hit: null, owner: null },
        7: { hit: null, owner: null },
        8: { hit: null, owner: null },
        9: { hit: null, owner: null },
        10: { hit: null, owner: null },
      },
      e: {
        1: { hit: null, owner: null },
        2: { hit: null, owner: null },
        3: { hit: null, owner: null },
        4: { hit: null, owner: null },
        5: { hit: null, owner: null },
        6: { hit: null, owner: null },
        7: { hit: null, owner: null },
        8: { hit: null, owner: null },
        9: { hit: null, owner: null },
        10: { hit: null, owner: null },
      },
      f: {
        1: { hit: null, owner: null },
        2: { hit: null, owner: null },
        3: { hit: null, owner: null },
        4: { hit: null, owner: null },
        5: { hit: null, owner: null },
        6: { hit: null, owner: null },
        7: { hit: null, owner: null },
        8: { hit: null, owner: null },
        9: { hit: null, owner: null },
        10: { hit: null, owner: null },
      },
      g: {
        1: { hit: null, owner: null },
        2: { hit: null, owner: null },
        3: { hit: null, owner: null },
        4: { hit: null, owner: null },
        5: { hit: null, owner: null },
        6: { hit: null, owner: null },
        7: { hit: null, owner: null },
        8: { hit: null, owner: null },
        9: { hit: null, owner: null },
        10: { hit: null, owner: null },
      },
      h: {
        1: { hit: null, owner: null },
        2: { hit: null, owner: null },
        3: { hit: null, owner: null },
        4: { hit: null, owner: null },
        5: { hit: null, owner: null },
        6: { hit: null, owner: null },
        7: { hit: null, owner: null },
        8: { hit: null, owner: null },
        9: { hit: null, owner: null },
        10: { hit: null, owner: null },
      },
      i: {
        1: { hit: null, owner: null },
        2: { hit: null, owner: null },
        3: { hit: null, owner: null },
        4: { hit: null, owner: null },
        5: { hit: null, owner: null },
        6: { hit: null, owner: null },
        7: { hit: null, owner: null },
        8: { hit: null, owner: null },
        9: { hit: null, owner: null },
        10: { hit: null, owner: null },
      },
      j: {
        1: { hit: null, owner: null },
        2: { hit: null, owner: null },
        3: { hit: null, owner: null },
        4: { hit: null, owner: null },
        5: { hit: null, owner: null },
        6: { hit: null, owner: null },
        7: { hit: null, owner: null },
        8: { hit: null, owner: null },
        9: { hit: null, owner: null },
        10: { hit: null, owner: null },
      },
    },
    placeShip(ship, col, row, orientation) {
      this.board[col][row].owner = ship;
      const cols = "abcdefghij";
      if (orientation === "vertical") {
        for (let i = 0; i < ship.length; i += 1) {
          if (this.board[col][row - ship.length] !== undefined) {
            this.board[col][row - i].owner = ship;
          } else if (this.board[col][row + ship.length] !== undefined) {
            this.board[col][row + i].owner = ship;
          } else {
            throw new Error("Something went wrong!");
          }
        }
      }
      if (orientation === "horizontal") {
        for (let i = 0; i < ship.length; i += 1) {
          const currentIndex = cols.indexOf(col);
          if (cols.charAt(currentIndex + ship.length) !== "") {
            this.board[cols.charAt(currentIndex + i)][row].owner = ship;
          } else if (cols.charAt(currentIndex - ship.length) !== "") {
            this.board[cols.charAt(currentIndex - i)][row].owner = ship;
          } else {
            throw new Error("Something went wrong!");
          }
        }
      }
    },
  };
}
export default gameboard;
