// 202. Happy Number
// https://leetcode.com/problems/happy-number/
/*
Write an algorithm to determine if a number is "happy".
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by
the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops
endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:
Input: 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const records = {};
  records[n] = true;

  let sumSqure = 0;
  while (true) {
    while (n) {
      let r = n % 10;
      sumSqure += r * r;
      n = Number.parseInt(n / 10);
    }

    if (sumSqure === 1) {
      return true;
    }
    if (records[sumSqure] === true) {
      return false;
    }
    records[sumSqure] = true;
    n = sumSqure;
    sumSqure = 0;
  }
};
console.log(isHappy(19));
// Runtime: 64 ms, faster than 69.98% of JavaScript online submissions for Happy Number.