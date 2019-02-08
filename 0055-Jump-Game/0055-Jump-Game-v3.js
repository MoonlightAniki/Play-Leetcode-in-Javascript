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
  let i = 0;
  for (let max_reach = 0; i < nums.length && i <= max_reach; ++i) {
    max_reach = Math.max(max_reach, i + nums[i]);
  }
  return i === nums.length;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([0]));
/*
Runtime: 72 ms, faster than 59.77% of JavaScript online submissions for Jump Game.
Memory Usage: 16.3 MB, less than 32.61% of JavaScript online submissions for Jump Game.
 */