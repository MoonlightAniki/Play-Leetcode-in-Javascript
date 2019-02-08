// 63. Unique Paths II
// https://leetcode.com/problems/unique-paths-ii/
/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner
of the grid (marked 'Finish' in the diagram below).
Now consider if some obstacles are added to the grids. How many unique paths would there be?
An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:
Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsWithObstacles = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const solution = [];
  for (let i = 0; i < m; ++i) {
    solution.push([]);
  }
  for (let j = 0; j < n; ++j) {
    if (grid[0][j] === 1) {
      break;
    } else {
      solution[0][j] = 1;
    }
  }
  for (let i = 0; i < m; ++i) {
    if (grid[i][0] === 1) {
      break;
    } else {
      solution[i][0] = 1;
    }
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      if (grid[i][j] === 0) {
        solution[i][j] = (solution[i - 1][j] || 0) + (solution[i][j - 1] || 0);
      }
    }
  }
  return solution[m - 1][n - 1] || 0;
};

console.log(uniquePathsWithObstacles([[1], [0]]));
/*
Runtime: 88 ms, faster than 14.11% of JavaScript online submissions for Unique Paths II.
Memory Usage: 16.3 MB, less than 4.50% of JavaScript online submissions for Unique Paths II.
 */