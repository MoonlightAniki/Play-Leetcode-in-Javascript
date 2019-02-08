// 221. Maximal Square
// https://leetcode.com/problems/maximal-square/
/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:
Input:
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Output: 4
 */


/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix) return 0;
  const m = matrix.length;
  if (m === 0) return 0;
  const n = matrix[0].length;
  if (n === 0) return 0;
  const dp = [];
  for (let i = 0; i < m; ++i) {
    dp.push([]);
  }
  let w = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min((dp[i - 1][j] || 0), (dp[i][j - 1] || 0), (dp[i - 1][j - 1] || 0)) + 1;
        }
      }
      w = Math.max(w, dp[i][j] || 0);
    }
  }
  return w * w;
};
/*
Runtime: 96 ms, faster than 44.94% of JavaScript online submissions for Maximal Square.
Memory Usage: 23 MB, less than 14.64% of JavaScript online submissions for Maximal Square.
 */