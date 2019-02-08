// 55. Jump Game
// https://leetcode.com/problems/jump-game/
/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.

Example 1:
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (!nums || !nums.length) {
    return false;
  }
  const dp = [];//dp[index]表示能否从nums[index]跳至最后一个元素
  for (let i = nums.length - 1; i >= 0; --i) {
    let res = false;
    for (let j = nums[i]; j >= 0; --j) {
      if (i + j >= nums.length - 1 || !!dp[i + j]) {
        res = true;
        break;
      }
    }
    dp[i] = res;
  }
  return dp[0];
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([0]));
/*
Runtime: 2840 ms, faster than 18.36% of JavaScript online submissions for Jump Game.
Memory Usage: 18 MB, less than 13.48% of JavaScript online submissions for Jump Game.
 */