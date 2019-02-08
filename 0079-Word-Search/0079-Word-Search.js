// 79. Word Search
// https://leetcode.com/problems/word-search/
/*
Given a 2D board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or
vertically neighboring. The same letter cell may not be used more than once.

Example:
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 */


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!board) return false;
  m = board.length;
  if (m === 0) return false;
  n = board[0].length;
  if (n === 0) return false;
  used = [];
  for (let i = 0; i < m; ++i) {
    used.push([]);
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (dfs(board, i, j, word, 0)) {
        return true;
      }
    }
  }
  return false;
};

let m, n;
let used;
const d = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function inArea(x, y) {
  return x >= 0 && x < m && y >= 0 && y < n;
}

function dfs(board, x, y, word, index) {
  if (index === word.length - 1) {
    return board[x][y] === word[index];
  }
  if (board[x][y] !== word[index]) {
    return false;
  }
  used[x][y] = true;
  for (let i = 0; i < 4; ++i) {
    let newX = x + d[i][0];
    let newY = y + d[i][1];
    if (inArea(newX, newY) && !used[newX][newY] && dfs(board, newX, newY, word, index + 1)) {
      return true;
    }
  }
  used[x][y] = false;
  return false;
}

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

console.log(exist(board, 'ABCCED'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));
console.log(exist([['a']], 'a'));
/*
Runtime: 104 ms, faster than 53.28% of JavaScript online submissions for Word Search.
Memory Usage: 19.7 MB, less than 41.36% of JavaScript online submissions for Word Search.
 */
