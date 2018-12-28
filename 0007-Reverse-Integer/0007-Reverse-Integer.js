// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/
/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const negative = x < 0;
  if (negative) {
    x *= -1;
  }
  let res = 0;
  while (x) {
    res = res * 10 + x % 10;
    x = Number.parseInt(x / 10);
  }
  if (negative) {
    res *= -1;
  }
  return res;
};
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));
