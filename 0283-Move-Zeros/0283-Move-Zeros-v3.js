// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/
/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const nonZeroElements = [];
  nums.forEach((num) => {
    if (num) {
      nonZeroElements.push(num);
    }
  });
  for (let i = 0; i < nonZeroElements.length; ++i) {
    nums[i] = nonZeroElements[i];
  }
  for (let i = nonZeroElements.length; i < nums.length; ++i) {
    nums[i] = 0;
  }
};
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
/*
Runtime: 60 ms, faster than 87.70% of JavaScript online submissions for Move Zeroes.
Memory Usage: 36.5 MB, less than 7.99% of JavaScript online submissions for Move Zeroes.
 */