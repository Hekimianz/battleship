/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import logoImg from "./assets/logo.svg";
import flipIcon from "./assets/flip.svg";
import game from "./game";

const renderer = {
  gameLoop: game(),
  init() {
    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("id", "wrapper");
    document.body.appendChild(this.wrapper);
    this.homePage();
  },
  gamePage() {
    this.boardsWrap = document.createElement("div");
    this.boardsWrap.setAttribute("id", "boardsWrap");
    this.board1 = document.createElement("div");
    this.board1.setAttribute("id", "board1");
    this.board2 = document.createElement("div");
    this.board2.setAttribute("id", "board2");
    this.startGameBtn = document.createElement("button");
    this.startGameBtn.innerText = "Start Game";
    this.startGameBtn.id = "startGameBtn";
    this.createGrid(this.board1);
    this.createGrid(this.board2, 2);
    this.flipShip = document.createElement("img");
    this.flipShip.src = flipIcon;
    this.flipShip.id = "flipShip";
    this.wrapper.append(this.boardsWrap, this.startGameBtn);
    this.boardsWrap.append(this.board1, this.flipShip, this.board2);
    this.allCells = document.getElementsByClassName("player1");
    this.allCellsP2 = document.getElementsByClassName("player2");
    this.startGameBtn.addEventListener("click", () => {
      this.startGameBtn.style.display = "none";
      this.flipShip.style.display = "none";
      this.attack();
    });
    this.flipShip.addEventListener("click", () => {
      if (this.orientation === "horizontal") {
        this.orientation = "vertical";
      } else {
        this.orientation = "horizontal";
      }
    });
  },
  createGrid(board, playerNum = 1) {
    const cols =
      "-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij";
    const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 1; i < 122; i += 1) {
      this.cell = document.createElement("div");
      if (i === 1) {
        this.cell.classList.add("col");
      } else if (i >= 2 && i <= 11) {
        this.cell.classList.add("col");
        this.cell.innerText = cols.charAt(i - 1).toUpperCase();
      } else if (
        i === 12 ||
        i === 23 ||
        i === 34 ||
        i === 45 ||
        i === 56 ||
        i === 67 ||
        i === 78 ||
        i === 89 ||
        i === 100 ||
        i === 111
      ) {
        this.cell.classList.add("col");
        // eslint-disable-next-line prefer-destructuring
        this.cell.innerText = rows[0];
        rows.shift();
      } else {
        this.cell.classList.add(`player${playerNum}`);
        this.cell.dataset.col = cols.charAt(i - 1);
        if (rows[0] !== undefined) {
          this.cell.dataset.row = rows[0] - 1;
        } else {
          this.cell.dataset.row = 10;
        }
        this.cell.dataset.coords = `${this.cell.dataset.col} ${this.cell.dataset.row}`;
      }

      board.appendChild(this.cell);
    }
  },
  homePage() {
    this.logo = document.createElement("img");
    this.logo.src = logoImg;
    this.logo.id = "logoImg";
    this.header = document.createElement("h1");
    this.header.innerText = "Battleship";
    this.userName = document.createElement("input");
    this.userName.id = "userName";
    this.userName.placeholder = "Your name:";
    this.playBtn = document.createElement("button");
    this.playBtn.innerText = "Play";
    this.playBtn.classList.add("playBtn");

    this.playBtn.addEventListener("click", () => {
      if (this.userName.value !== "") {
        this.clearPage();
        this.gamePage();
        this.gameLoop.startGame(this.userName.value);
        this.renderBoard(this.gameLoop.player1);
        this.placement();
      }
    });

    this.wrapper.append(this.logo, this.header, this.userName, this.playBtn);
  },
  clearPage() {
    while (this.wrapper.firstChild) {
      this.wrapper.removeChild(this.wrapper.lastChild);
    }
  },
  renderBoard(player) {
    if (player === this.gameLoop.player2) {
      this.allCells = document.getElementsByClassName("player2");
    }
    for (const col in player.board.board) {
      for (const row in player.board.board[col]) {
        if (player.board.board[col][row].owner !== null) {
          for (let i = 0; i < this.allCells.length; i += 1) {
            if (this.allCells[i].dataset.coords === `${col} ${row}`) {
              this.allCells[i].style.backgroundColor = "#1EDE09";
            }
          }
        } else {
          for (let i = 0; i < this.allCells.length; i += 1) {
            if (this.allCells[i].dataset.coords === `${col} ${row}`) {
              this.allCells[i].style.backgroundColor = "transparent";
            }
          }
        }
      }
    }
    this.allCells = document.getElementsByClassName("player1");
  },
  renderAttacks(player) {
    if (player === this.gameLoop.player2) {
      this.allCells = document.getElementsByClassName("player2");
    }
    for (const col in player.board.board) {
      for (const row in player.board.board[col]) {
        if (player.board.board[col][row].hit !== null) {
          if (player.board.board[col][row].hit === 0) {
            for (let i = 0; i < this.allCells.length; i += 1) {
              if (this.allCells[i].dataset.coords === `${col} ${row}`) {
                this.allCells[i].style.backgroundColor = "#EAFF08";
              }
            }
          } else if (player.board.board[col][row].hit === 1) {
            for (let i = 0; i < this.allCells.length; i += 1) {
              if (this.allCells[i].dataset.coords === `${col} ${row}`) {
                this.allCells[i].style.backgroundColor = "#C70824";
                this.allCells[i].style.borderWidth = "3px";
              }
            }
          }
        }
      }
    }
    this.allCells = document.getElementsByClassName("player1");
  },
  attack() {
    for (let i = 0; i < this.allCellsP2.length; i += 1) {
      this.allCellsP2[i].addEventListener("click", this.attackEvent.bind(this));
    }
  },

  attackEvent(e) {
    this.gameLoop.player2.board.recieveAttack(
      e.target.dataset.col,
      e.target.dataset.row
    );
    this.renderAttacks(this.gameLoop.player2);
    if (
      this.checkGameOver(this.gameLoop.player2, this.gameLoop.player1) === false
    ) {
      setTimeout(() => {
        this.gameLoop.player1.recieveRandomAttack();

        this.renderAttacks(this.gameLoop.player1);
        this.checkGameOver(this.gameLoop.player1, this.gameLoop.player2);
      }, 300);
    }
  },
  checkGameOver(player, otherPlayer) {
    if (player.board.reportSunk() === false) {
      return false;
    }
    this.winner = otherPlayer.name;
    for (let i = 0; i < this.allCellsP2.length; i += 1) {
      this.allCellsP2[i].style.pointerEvents = "none";
    }
    this.gameOverScreen();
    return true;
  },
  gameOverScreen() {
    this.gameOverWrap = document.createElement("div");
    this.gameOverWrap.id = "gameOverWrap";
    this.gameOverSpan = document.createElement("span");
    this.gameOverSpan.innerText = `${this.winner} Wins!`;
    this.gameOverSpan.id = "gameOverText";
    this.restartGame = document.createElement("button");
    this.restartGame.innerText = "Play again";
    this.restartGame.addEventListener("click", () => {
      this.gameOverWrap.style.display = "none";
      this.clearPage();
      this.gamePage();
      this.gameLoop.startGame(this.userName.value);
      this.renderBoard(this.gameLoop.player1);
      this.attack();
    });
    document.body.appendChild(this.gameOverWrap);
    this.gameOverWrap.append(this.gameOverSpan, this.restartGame);
  },
  orientation: "vertical",
  placement() {
    for (let i = 0; i < this.allCells.length; i += 1) {
      this.allCells[i].addEventListener("click", (e) => {
        const { col } = e.target.dataset;
        const row = Number(e.target.dataset.row);
        if (this.gameLoop.player1.board.ships.carrier.placed !== true) {
          this.gameLoop.player1.board.placeShip(
            this.gameLoop.player1.board.ships.carrier,
            col,
            row,
            this.orientation
          );
        } else if (
          this.gameLoop.player1.board.ships.battleship.placed !== true
        ) {
          this.gameLoop.player1.board.placeShip(
            this.gameLoop.player1.board.ships.battleship,
            col,
            row,
            this.orientation
          );
        } else if (
          this.gameLoop.player1.board.ships.destroyer.placed !== true
        ) {
          this.gameLoop.player1.board.placeShip(
            this.gameLoop.player1.board.ships.destroyer,
            col,
            row,
            this.orientation
          );
        } else if (
          this.gameLoop.player1.board.ships.submarine.placed !== true
        ) {
          this.gameLoop.player1.board.placeShip(
            this.gameLoop.player1.board.ships.submarine,
            col,
            row,
            this.orientation
          );
        } else if (this.gameLoop.player1.board.ships.patrol.placed !== true) {
          this.gameLoop.player1.board.placeShip(
            this.gameLoop.player1.board.ships.patrol,
            col,
            row,
            this.orientation
          );
        } else {
          console.log(this.gameLoop.player1.board.board);
        }

        this.renderBoard(this.gameLoop.player1);
      });
    }
  },
};

export default renderer;
