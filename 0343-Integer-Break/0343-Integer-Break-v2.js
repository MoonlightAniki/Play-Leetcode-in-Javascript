// 343. Integer Break
// https://leetcode.com/problems/integer-break/
/*
Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers.
Return the maximum product you can get.

Example 1:
Input: 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.

Example 2:
Input: 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

Note: You may assume that n is not less than 2 and not larger than 58.
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  const dp = [];
  dp[1] = dp[2] = 1;
  for (let i = 3; i <= n; ++i) {
    dp[i] = 0;
    for (let j = 1; j < i; ++j) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }
  return dp[n];
};
console.log(integerBreak(10));
// Runtime: 52 ms, faster than 76.32% of JavaScript online submissions for Integer Break.

