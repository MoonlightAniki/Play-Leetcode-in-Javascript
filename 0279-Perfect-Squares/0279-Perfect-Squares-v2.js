// 279. Perfect Squares
// https://leetcode.com/problems/perfect-squares/
/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

Example 2:
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j * j <= i; ++j) {
      dp[i] = Math.min(dp[i] || n, 1 + dp[i - j * j]);
    }
  }
  return dp[n];
};
console.log(numSquares(12));
console.log(numSquares(13));
/*
Runtime: 268 ms, faster than 36.99% of JavaScript online submissions for Perfect Squares.
Memory Usage: 18.3 MB, less than 38.95% of JavaScript online submissions for Perfect Squares.
 */
