import logoImg from "./assets/logo.svg";

const renderer = {
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
    this.createGrid(this.board1);
    this.createGrid(this.board2);

    this.wrapper.appendChild(this.boardsWrap);
    this.boardsWrap.append(this.board1, this.board2);
  },
  createGrid(board) {
    const cols = "-abcdefghij";
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
        this.cell.classList.add("cell");
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
    this.playBtn = document.createElement("button");
    this.playBtn.innerText = "Play";
    this.playBtn.classList.add("playBtn");
    this.playBtn.addEventListener("click", () => {
      this.clearPage();
      this.gamePage();
    });
    this.wrapper.append(this.logo, this.header, this.playBtn);
  },
  clearPage() {
    while (this.wrapper.firstChild) {
      this.wrapper.removeChild(this.wrapper.lastChild);
    }
  },
};

export default renderer;
