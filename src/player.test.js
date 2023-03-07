/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import player from "./player";

const player1 = player("aram");
const player2 = player();
test("randomCol: a-j", () => {
  expect("abcdefghij").toMatch(player1.randomCol());
});

test("randomRow: 1-10", () => {
  expect(player1.randomRow()).toBeLessThanOrEqual(10);
  expect(player1.randomRow()).toBeGreaterThan(0);
});

test("random attack: attacks random cell", () => {
  const col = player1.randomCol();
  const row = player1.randomRow();
  player2.recieveRandomAttack(col, row);
  expect(player2.board.board[col][row].hit).toBe(0);
});
