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
  // [0...k)范围内按顺序存放非0元素，[k...i)范围内存放0
  let k = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i]) {
      if (k !== i) {
        [nums[k], nums[i]] = [nums[i], nums[k]];
      }
      ++k;
    }
  }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
/*
Runtime: 64 ms, faster than 72.56% of JavaScript online submissions for Move Zeroes.
Memory Usage: 36.5 MB, less than 7.07% of JavaScript online submissions for Move Zeroes.
 */