// 75. Sort Colors
// https://leetcode.com/problems/sort-colors/
/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent,
with the colors in the order red, white and blue.
Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
Note: You are not suppose to use the library's sort function for this problem.

Example:
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let lt = -1;//nums[0...lt]等于0
  let gt = nums.length;//nums[gt...length-1]等于2
  let i = 0;//nums[lt+1...i)等于1
  while (i < gt) {
    if (nums[i] === 0) {
      [nums[lt + 1], nums[i]] = [nums[i], nums[lt + 1]];
      ++lt;
      ++i
    } else if (nums[i] === 1) {
      ++i;
    } else {
      [nums[i], nums[gt - 1]] = [nums[gt - 1], nums[i]];
      --gt;
    }
  }
};
/*
Runtime: 76 ms, faster than 23.46% of JavaScript online submissions for Sort Colors.
Memory Usage: 14.9 MB, less than 33.33% of JavaScript online submissions for Sort Colors.
 */