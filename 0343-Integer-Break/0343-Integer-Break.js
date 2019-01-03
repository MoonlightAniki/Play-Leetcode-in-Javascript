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
  memo = {};
  return breakInteger(n);
};

var memo;

function breakInteger(n) {
  if (memo[n]) {
    return memo[n];
  }
  let max = 0;
  for (let i = 1; i < n; ++i) {
    max = Math.max(max, i * (n - i), i * breakInteger(n - i));
  }
  memo[n] = max;
  return max;
}

console.log(integerBreak(10));
// Runtime: 52 ms, faster than 76.32% of JavaScript online submissions for Integer Break.

