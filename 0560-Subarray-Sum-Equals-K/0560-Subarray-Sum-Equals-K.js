// 560. Subarray Sum Equals K
// https://leetcode.com/problems/subarray-sum-equals-k/
/*
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2

Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const sums = [];//sums[i]是nums[0...i)范围内元素的和
  sums[0] = 0;
  for (let i = 1; i <= nums.length; ++i) {
    sums[i] = sums[i - 1] + nums[i - 1];
  }
  let res = 0;
  for (let right = 1; right < sums.length; ++right) {
    for (let left = 0; left < right; ++left) {
      if (sums[right] - sums[left] === k) {
        ++res;
      }
    }
  }
  return res;
};
console.log(subarraySum([1, 1, 1], 2 ));
// Runtime: 416 ms, faster than 2.50% of JavaScript online submissions for Subarray Sum Equals K.
// Memory Usage: 18.7 MB, less than 46.67% of JavaScript online submissions for Subarray Sum Equals K.