// 78. Subsets
// https://leetcode.com/problems/subsets/
/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  res.length = 0;
  for (let len = 0; len <= nums.length; ++len) {
    generateSubset(nums, len, [], 0);
  }
  return res;
};

const res = [];

function generateSubset(nums, len, subset, index) {
  if (subset.length === len) {
    res.push([...subset]);
    return;
  }
  for (let i = index; i < nums.length; ++i) {
    subset.push(nums[i]);
    generateSubset(nums, len, subset, i + 1);
    subset.pop();
  }
}

console.log(subsets([1, 2, 3]));
// Runtime: 60 ms, faster than 98.71% of JavaScript online submissions for Subsets.