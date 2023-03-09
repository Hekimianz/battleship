import player from "./player";

function game() {
  return {
    createPlayers(playerName) {
      this.player1 = player(playerName);
      this.player2 = player();
    },
    startGame(playerName) {
      this.createPlayers(playerName);
      // this.placeShips(this.player1);
      this.placeShips(this.player2);
    },
    // eslint-disable-next-line no-shadow
    placeShips(player) {
      this.getRandTable();
      player.board.placeShip(
        player.board.ships.carrier,
        this.placedTables[this.table][0][0],
        this.placedTables[this.table][0][1],
        this.placedTables[this.table][0][2]
      );
      player.board.placeShip(
        player.board.ships.battleship,
        this.placedTables[this.table][1][0],
        this.placedTables[this.table][1][1],
        this.placedTables[this.table][1][2]
      );
      player.board.placeShip(
        player.board.ships.destroyer,
        this.placedTables[this.table][2][0],
        this.placedTables[this.table][2][1],
        this.placedTables[this.table][2][2]
      );
      player.board.placeShip(
        player.board.ships.submarine,
        this.placedTables[this.table][3][0],
        this.placedTables[this.table][3][1],
        this.placedTables[this.table][3][2]
      );
      player.board.placeShip(
        player.board.ships.patrol,
        this.placedTables[this.table][4][0],
        this.placedTables[this.table][4][1],
        this.placedTables[this.table][4][2]
      );
    },
    getRandTable() {
      this.table = Math.floor(Math.random() * this.placedTables.length);
      return this.table;
    },
    placedTables: [
      [
        ["b", 8, "vertical"],
        ["e", 8, "horizontal"],
        ["d", 2, "vertical"],
        ["f", 5, "horizontal"],
        ["g", 3, "horizontal"],
      ],
      [
        ["a", 4, "horizontal"],
        ["f", 9, "vertical"],
        ["i", 10, "vertical"],
        ["i", 4, "vertical"],
        ["b", 8, "horizontal"],
      ],
      [
        ["a", 6, "horizontal"],
        ["d", 10, "horizontal"],
        ["g", 5, "horizontal"],
        ["d", 4, "vertical"],
        ["i", 9, "vertical"],
      ],
      [
        ["b", 10, "horizontal"],
        ["a", 8, "horizontal"],
        ["c", 1, "vertical"],
        ["g", 8, "vertical"],
        ["c", 5, "horizontal"],
      ],
      [
        ["b", 6, "horizontal"],
        ["f", 9, "horizontal"],
        ["d", 2, "vertical"],
        ["h", 2, "vertical"],
        ["d", 8, "horizontal"],
      ],
      [
        ["c", 8, "horizontal"],
        ["a", 6, "vertical"],
        ["f", 2, "horizontal"],
        ["i", 6, "vertical"],
        ["f", 6, "horizontal"],
      ],
      [
        ["a", 8, "horizontal"],
        ["g", 1, "vertical"],
        ["c", 5, "horizontal"],
        ["j", 8, "vertical"],
        ["g", 7, "horizontal"],
      ],
      [
        ["b", 1, "horizontal"],
        ["b", 9, "horizontal"],
        ["f", 5, "vertical"],
        ["j", 9, "vertical"],
        ["b", 3, "horizontal"],
      ],
      [
        ["a", 3, "horizontal"],
        ["c", 10, "horizontal"],
        ["b", 5, "horizontal"],
        ["e", 8, "vertical"],
        ["a", 7, "vertical"],
      ],
      [
        ["b", 4, "horizontal"],
        ["i", 3, "vertical"],
        ["a", 9, "horizontal"],
        ["f", 9, "horizontal"],
        ["f", 7, "vertical"],
      ],
      [
        ["b", 3, "horizontal"],
        ["e", 9, "horizontal"],
        ["b", 8, "vertical"],
        ["j", 6, "vertical"],
        ["g", 6, "vertical"],
      ],
      [
        ["e", 5, "horizontal"],
        ["a", 1, "vertical"],
        ["c", 2, "vertical"],
        ["a", 9, "horizontal"],
        ["e", 7, "horizontal"],
      ],
      [
        ["c", 7, "horizontal"],
        ["h", 1, "vertical"],
        ["d", 1, "horizontal"],
        ["b", 2, "vertical"],
        ["d", 4, "horizontal"],
      ],
      [
        ["c", 9, "horizontal"],
        ["a", 7, "horizontal"],
        ["b", 2, "horizontal"],
        ["j", 2, "vertical"],
        ["j", 9, "vertical"],
      ],
      [
        ["e", 1, "horizontal"],
        ["c", 4, "horizontal"],
        ["c", 8, "vertical"],
        ["b", 10, "horizontal"],
        ["e", 7, "vertical"],
      ],
      [
        ["e", 7, "horizontal"],
        ["a", 8, "horizontal"],
        ["d", 1, "horizontal"],
        ["f", 5, "vertical"],
        ["a", 6, "vertical"],
      ],
      [
        ["i", 1, "vertical"],
        ["e", 10, "horizontal"],
        ["d", 3, "horizontal"],
        ["b", 9, "vertical"],
        ["f", 1, "horizontal"],
      ],
      [
        ["c", 2, "horizontal"],
        ["e", 10, "horizontal"],
        ["j", 2, "vertical"],
        ["c", 7, "horizontal"],
        ["c", 5, "vertical"],
      ],
      [
        ["d", 5, "horizontal"],
        ["a", 10, "horizontal"],
        ["b", 5, "vertical"],
        ["i", 1, "vertical"],
        ["h", 8, "horizontal"],
      ],
      [
        ["b", 8, "horizontal"],
        ["e", 5, "horizontal"],
        ["c", 2, "horizontal"],
        ["h", 1, "vertical"],
        ["h", 8, "vertical"],
      ],
    ],
  };
}

export default game;
