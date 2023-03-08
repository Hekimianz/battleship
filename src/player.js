import gameboard from "./gameboard";

function player(name = "cpu") {
  return {
    board: gameboard(),
    name,
    randomNum() {
      return Math.floor(Math.random() * 10);
    },
    randomCol() {
      const cols = "abcdefghij";
      return cols.charAt(this.randomNum());
    },
    randomRow() {
      return this.randomNum() + 1;
    },

    recieveRandomAttack(col = this.randomCol(), row = this.randomRow()) {
      if (this.board.board[col][row].hit === null) {
        if (this.board.recieveAttack(col, row) === true) {
          return true;
        }
      } else {
        this.recieveRandomAttack();
      }
      return false;
    },
  };
}

export default player;
