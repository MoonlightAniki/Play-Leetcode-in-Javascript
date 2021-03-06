// 213. House Robber II
// https://leetcode.com/problems/house-robber-ii/
/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All
houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent
houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on
the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money
you can rob tonight without alerting the police.

Example 1:
Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
             because they are adjacent houses.

Example 2:
Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums || !nums.length) return 0;
  if (nums.length <= 2) return Math.max(...nums);
  return Math.max(tryRob(nums, 0, nums.length - 2), tryRob(nums, 1, nums.length - 1));
};


function tryRob(nums, start, end) {
  let prevMax = nums[start];
  let curMax = Math.max(prevMax, nums[start + 1]);
  for (let i = start + 2; i <= end; ++i) {
    let temp = curMax;
    curMax = Math.max(
      prevMax + nums[i],
      curMax
    );
    prevMax = temp;
  }
  return curMax;
}

console.log(rob([2, 3, 2]));
/*
Runtime: 68 ms, faster than 36.48% of JavaScript online submissions for House Robber II.
Memory Usage: 14.5 MB, less than 50.00% of JavaScript online submissions for House Robber II.
 */