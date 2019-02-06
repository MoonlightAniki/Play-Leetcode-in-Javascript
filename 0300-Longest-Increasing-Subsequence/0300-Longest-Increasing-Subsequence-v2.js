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
  const dp = [];// dp[i]表示已nums[i]结束的最长上升子序列的长度
  for (let i = 0; i < nums.length; ++i) {
    dp[i] = 1;
    for (let j = 0; j < i; ++j) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
/*
Runtime: 80 ms, faster than 45.61% of JavaScript online submissions for Longest Increasing Subsequence.
Memory Usage: 15.1 MB, less than 30.07% of JavaScript online submissions for Longest Increasing Subsequence.
 */