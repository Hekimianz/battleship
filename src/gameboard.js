/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import shipFac from "./ship";

function gameboard() {
  return {
    ships: {
      carrier: shipFac("carrier", 5),
      battleship: shipFac("battleship", 4),
      destroyer: shipFac("destroyer", 3),
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
    allSunk: false,
    placeShip(ship, col, row, orientation) {
      if (this.board[col][row].owner === null) {
        const cols = "abcdefghij";
        // vertical
        if (orientation === "vertical") {
          for (let i = 0; i < ship.length; i += 1) {
            // to the top
            if (this.board[col][row - ship.length] !== undefined) {
              if (this.board[col][row - i].owner === null) {
                this.board[col][row - i].owner = ship;
                this.board[col][row].owner = ship;
                ship.placed = true;
              } else {
                ship.placed = false;
                this.clearShip(ship);
                break;
              }
              // to the bottom
            } else if (this.board[col][row + ship.length] !== undefined) {
              if (this.board[col][row + i].owner === null) {
                this.board[col][row + i].owner = ship;
                this.board[col][row].owner = ship;
                ship.placed = true;
              } else {
                ship.placed = false;
                this.clearShip(ship);
                break;
              }
            }
          }
        }
        // horizontal
        if (orientation === "horizontal") {
          for (let i = 0; i < ship.length; i += 1) {
            const currentIndex = cols.indexOf(col);
            // to the right
            if (cols.charAt(currentIndex + ship.length) !== "") {
              if (
                this.board[cols.charAt(currentIndex + i)][row].owner === null
              ) {
                this.board[cols.charAt(currentIndex + i)][row].owner = ship;
                this.board[col][row].owner = ship;
                ship.placed = true;
              } else {
                ship.placed = false;
                this.clearShip(ship);
                break;
              }

              // to the left
            } else if (cols.charAt(currentIndex - ship.length) !== "") {
              if (
                this.board[cols.charAt(currentIndex - i)][row].owner === null
              ) {
                this.board[cols.charAt(currentIndex - i)][row].owner = ship;
                this.board[col][row].owner = ship;
                ship.placed = true;
              } else {
                ship.placed = false;
                this.clearShip(ship);
                break;
              }
            }
          }
        }
      }
    },
    clearShip(ship) {
      for (const col in this.board) {
        for (const row in this.board[col]) {
          if (this.board[col][row].owner === ship) {
            this.board[col][row].owner = null;
          }
        }
      }
    },

    recieveAttack(col, row) {
      const attackedCell = this.board[col][row];
      if (attackedCell.owner !== null) {
        attackedCell.owner.hit();
        attackedCell.hit = 1;
        return true;
      }
      attackedCell.hit = 0;
      return false;
    },
    reportSunk() {
      if (
        this.ships.carrier.isSunk() === true &&
        this.ships.battleship.isSunk() === true &&
        this.ships.destroyer.isSunk() === true &&
        this.ships.submarine.isSunk() === true &&
        this.ships.patrol.isSunk() === true
      ) {
        this.allSunk = true;
        return true;
      }

      return false;
    },
  };
}
export default gameboard;
