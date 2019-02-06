// 300. Longest Increasing Subsequence
// https://leetcode.com/problems/longest-increasing-subsequence/
/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:
Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Note:
There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums || !nums.length) {
    return 0;
  }
  memo = [];
  for (let i = 0; i < nums.length; ++i) {
    getMaxLength(nums, i);
  }
  return Math.max(...memo);
};

let memo;// memo[i]表示以nums[i]结束的最长上升子序列的长度

function getMaxLength(nums, index) {
  if (memo[index]) {
    return memo[index];
  }
  let res = 1;
  for (let i = 0; i < index; ++i) {
    if (nums[i] < nums[index]) {
      res = Math.max(res, 1 + getMaxLength(nums, i));
    }
  }
  memo[index] = res;
  return res;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
/*
Runtime: 116 ms, faster than 13.03% of JavaScript online submissions for Longest Increasing Subsequence.
Memory Usage: 15.7 MB, less than 12.78% of JavaScript online submissions for Longest Increasing Subsequence.
 */