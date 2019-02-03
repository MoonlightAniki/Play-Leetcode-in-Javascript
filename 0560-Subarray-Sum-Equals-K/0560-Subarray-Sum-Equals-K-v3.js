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
  if (!nums || !nums.length) {
    return 0;
  }
  let res = 0;
  const record = {};
  let sum = 0;
  record[0] = 1;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    if (record[sum - k]) {
      res += record[sum - k];
    }
    record[sum] = (record[sum] || 0) + 1;
  }
  return res;
};
console.log(subarraySum([1, 1, 1], 2));
// Runtime: 116 ms, faster than 71.25% of JavaScript online submissions for Subarray Sum Equals K.
// Memory Usage: 24.3 MB, less than 13.33% of JavaScript online submissions for Subarray Sum Equals K.