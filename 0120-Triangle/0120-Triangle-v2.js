// 120. Triangle
// https://leetcode.com/problems/triangle/
/*
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:
Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (!triangle || !triangle.length) {
    return 0;
  }
  if (triangle.length === 1) {
    return triangle[0][0];
  }
  for (let i = 1; i < triangle.length; ++i) {
    for (let j = 0; j < triangle[i].length; ++j) {
      if (j === 0) {
        triangle[i][j] += triangle[i - 1][0];
      } else if (j === triangle[i].length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
      }
    }
  }
  return Math.min(...triangle.pop());
};


const triangle = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
];
console.log(minimumTotal(triangle));
/*
Runtime: 72 ms, faster than 34.22% of JavaScript online submissions for Triangle.
Memory Usage: 15.4 MB, less than 48.85% of JavaScript online submissions for Triangle.
 */