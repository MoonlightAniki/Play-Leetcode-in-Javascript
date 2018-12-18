// 461. Hamming Distance
/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
 */


/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xor = x ^ y;
  let res = 0;
  while (xor) {
    ++res;
    xor &= xor - 1;
  }
  return res;
};

console.log(hammingDistance(1, 4));

// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Hamming