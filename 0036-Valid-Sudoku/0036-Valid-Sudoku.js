// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/
/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
  Each row must contain the digits 1-9 without repetition.
  Each column must contain the digits 1-9 without repetition.
  Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
A partially filled sudoku which is valid.
The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true

Example 2:
Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // check each row
  for (let i = 0; i < 9; ++i) {
    const map = {};
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] !== '.') {
        if (map[board[i][j]]) {
          return false;
        }
        map[board[i][j]] = true;
      }
    }
  }

  // check each column
  for (let j = 0; j < 9; ++j) {
    const map = {};
    for (let i = 0; i < 9; ++i) {
      if (board[i][j] !== '.') {
        if (map[board[i][j]]) {
          return false;
        }
        map[board[i][j]] = true;
      }
    }
  }

  // check each 3*3 box
  for (let u = 0; u < 9; u += 3) {// row offset
    for (let v = 0; v < 9; v += 3) {// col offset
      const map = {};
      for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
          if (board[u + i][v + j] !== '.') {
            if (map[board[u + i][v + j]]) {
              return false;
            }
            map[board[u + i][v + j]] = true;
          }
        }
      }
    }
  }

  return true;
};

const board = [
  ["7", ".", ".", ".", "4", ".", ".", ".", "."],
  [".", ".", ".", "8", "6", "5", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "9", ".", ".", "."],
  [".", ".", ".", ".", "5", ".", "5", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."]
];
console.log(isValidSudoku(board));
/*
Runtime: 92 ms, faster than 48.84% of JavaScript online submissions for Valid Sudoku.
Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Valid Sudoku.
 */