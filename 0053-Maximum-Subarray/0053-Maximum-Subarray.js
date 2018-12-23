// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }
  let [maxSoFar, maxEndingHere] = [nums[0], nums[0]];
  for (let i = 1; i < nums.length; ++i) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};
// Runtime: 60 ms, faster than 84.06% of JavaScript online submissions for Maximum Subarray.