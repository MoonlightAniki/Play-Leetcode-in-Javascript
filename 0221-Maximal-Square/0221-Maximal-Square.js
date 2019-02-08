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
  for (let w = Math.min(m, n); w > 0; --w) {
    for (let i = 0; i + w <= m; ++i) {
      for (let j = 0; j + w <= n; ++j) {
        let exists = true;
        for (let u = 0; exists && u < w; ++u) {
          for (let v = 0; exists && v < w; ++v) {
            if (matrix[i + u][j + v] === '0') {
              exists = false;
            }
          }
        }
        if (exists) {
          return w * w;
        }
      }
    }
  }
  return 0;
};
/*
Runtime: 224 ms, faster than 3.80% of JavaScript online submissions for Maximal Square.
Memory Usage: 20.7 MB, less than 36.59% of JavaScript online submissions for Maximal Square.
 */