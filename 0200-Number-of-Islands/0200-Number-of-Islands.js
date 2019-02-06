// 200. Number of Islands
// https://leetcode.com/problems/number-of-islands/
/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is
formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input:
11110
11010
11000
00000
Output: 1

Example 2:
Input:
11000
11000
00100
00011
Output: 3
 */


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid) {
    return 0;
  }
  m = grid.length;
  if (m === 0) {
    return 0;
  }
  n = grid[0].length;
  if (n === 0) {
    return 0;
  }
  let res = 0;
  visited = [];
  for (let i = 0; i < m; ++i) {
    visited.push([]);
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (inArea(i, j) && !visited[i][j] && grid[i][j] === '1') {
        dfs(grid, i, j);
        ++res;
      }
    }
  }
  return res;
};

let m, n;

let visited;

const d = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function inArea(x, y) {
  return x >= 0 && x < m && y >= 0 && y < n;
}

function dfs(grid, x, y) {
  visited[x][y] = true;
  for (let i = 0; i < 4; ++i) {
    let newX = x + d[i][0];
    let newY = y + d[i][1];
    if (inArea(newX, newY) && !visited[newX][newY] && grid[newX][newY] === '1') {
      dfs(grid, newX, newY);
    }
  }
}
/*
Runtime: 92 ms, faster than 24.90% of JavaScript online submissions for Number of Islands.
Memory Usage: 20.3 MB, less than 24.66% of JavaScript online submissions for Number of Islands.
 */