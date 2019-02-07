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
  sums = [];
  if (!triangle || !triangle.length) {
    return 0;
  }
  __pathSum(triangle, 0, 0, 0);
  return Math.min(...sums);
};

let sums;

function __pathSum(triangle, x, y, sum) {
  if (x === triangle.length - 1) {
    sums.push(sum + triangle[x][y]);
    return;
  }
  sum += triangle[x][y];
  __pathSum(triangle, x + 1, y, sum);
  __pathSum(triangle, x + 1, y + 1, sum);
}


const triangle = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
];
console.log(minimumTotal(triangle));
// Memory Limit Exceeded