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
  memo = [0, 1];
  return __numSquares(n);
};

let memo;

function __numSquares(n) {
  if (memo[n]) {
    return memo[n];
  }
  for (let i = 1; i * i <= n; ++i) {
    memo[n] = Math.min(memo[n] || n, 1 + __numSquares(n - i * i));
  }
  return memo[n];
}

console.log(numSquares(12));
console.log(numSquares(13));
/*
Runtime: 392 ms, faster than 27.90% of JavaScript online submissions for Perfect Squares.
Memory Usage: 19.4 MB, less than 26.32% of JavaScript online submissions for Perfect Squares.
 */