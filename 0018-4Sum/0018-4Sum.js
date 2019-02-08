// 18. 4Sum
// https://leetcode.com/problems/4sum/
/*
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target?
Find all unique quadruplets in the array which gives the sum of target.

Note:
The solution set must not contain duplicate quadruplets.

Example:
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  if (!nums || nums.length < 4) {
    return res;
  }
  const n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i = next_index(nums, i)) {
    for (let j = i + 1; j < n; j = next_index(nums, j)) {
      // 在 nums[j+1...n-1] 范围内寻找两个数，使这两个数的和等于target-nums[i]-nums[j]
      let t = target - nums[i] - nums[j];
      let l = j + 1;
      let r = n - 1;
      while (l < r) {
        let sum = nums[l] + nums[r];
        if (sum === t) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          l = next_index(nums, l);
        } else if (sum < t) {
          l = next_index(nums, l);
        } else {
          r = prev_index(nums, r);
        }
      }
    }
  }
  return res;
};

function next_index(nums, index) {
  for (let i = index + 1; i < nums.length; ++i) {
    if (nums[i] !== nums[index]) {
      return i;
    }
  }
  return nums.length;
}

function prev_index(nums, index) {
  for (let i = index - 1; i >= 0; --i) {
    if (nums[i] !== nums[index]) {
      return i;
    }
  }
  return -1;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
/*
Runtime: 116 ms, faster than 58.02% of JavaScript online submissions for 4Sum.
Memory Usage: 17.8 MB, less than 22.77% of JavaScript online submissions for 4Sum.
 */