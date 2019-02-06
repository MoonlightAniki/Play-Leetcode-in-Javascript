// 240. Search a 2D Matrix II
// https://leetcode.com/problems/search-a-2d-matrix-ii/
/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

Example:
Consider the following matrix:
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.
Given target = 20, return false.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for (let nums of matrix) {
    if (binarySearch(nums, target)) {
      return true;
    }
  }
  return false;
};

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + ((right - left) / 2) | 0;
    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}
/*
Runtime: 260 ms, faster than 41.57% of JavaScript online submissions for Search a 2D Matrix II.
Memory Usage: 20 MB, less than 4.08% of JavaScript online submissions for Search a 2D Matrix II.
 */