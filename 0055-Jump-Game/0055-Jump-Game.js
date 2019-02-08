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
  memo = [];
  return __canJump(nums, 0, nums.length - 1);
};


let memo;

function __canJump(nums, l, r) {
  if (l >= r) {
    return true;
  } else {
    if (memo[l] !== undefined) {
      return memo[l];
    }
    let res = false;
    for (let i = nums[l]; i > 0; --i) {
      if (__canJump(nums, l + i, r)) {
        res = true;
        break;
      }
    }
    memo[l] = res;
    return res;
  }
}

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
/*
Runtime: 6304 ms, faster than 7.03% of JavaScript online submissions for Jump Game.
Memory Usage: 21.5 MB, less than 1.74% of JavaScript online submissions for Jump Game.
 */