// 209. Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/
/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which
the sum ≥ s. If there isn't one, return 0 instead.

Example:
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.

Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
 */

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let sum = 0;// nums[left...right]范围内元素的和
  let left = 0;
  let right = -1;
  let res = nums.length + 1;
  while (right < nums.length) {
    if (sum < s) {
      if (++right < nums.length) {
        sum += nums[right];
      }
    } else {
      res = Math.min(res, right - left + 1);
      sum -= nums[left++];
    }
  }
  if (res === nums.length + 1) {
    return 0;
  }
  return res;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
/*
Runtime: 72 ms, faster than 42.47% of JavaScript online submissions for Minimum Size Subarray Sum.
Memory Usage: 16.4 MB, less than 23.96% of JavaScript online submissions for Minimum Size Subarray Sum.
 */
