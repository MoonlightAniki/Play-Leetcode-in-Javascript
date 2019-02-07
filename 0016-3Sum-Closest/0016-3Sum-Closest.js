// 16. 3Sum Closest
// https://leetcode.com/problems/3sum-closest/
/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:
Given array nums = [-1, 2, 1, -4], and target = 1.
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  sums = {};
  used = [];
  generateCombinations(nums, 0, []);
  let keys = Object.keys(sums);
  let res = keys[0];
  for (let i = 1; i < keys.length; ++i) {
    if (Math.abs(target - keys[i]) < Math.abs(target - res)) {
      res = keys[i];
    }
  }
  return res;
};

let sums;
let used;

function generateCombinations(nums, index, path) {
  if (path.length === 3) {
    let sum = 0;
    path.forEach(i => sum += i);
    if (!sums[sum]) {
      sums[sum] = true;
    }
    return;
  }
  for (let i = index; i < nums.length; ++i) {
    if (!used[i]) {
      path.push(nums[i]);
      used[i] = true;
      generateCombinations(nums, i + 1, path);
      path.pop();
      used[i] = false;
    }
  }
}

/*
Runtime: 4500 ms, faster than 0.96% of JavaScript online submissions for 3Sum Closest.
Memory Usage: 25.2 MB, less than 3.92% of JavaScript online submissions for 3Sum Closest.
 */