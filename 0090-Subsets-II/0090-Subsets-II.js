// 90. Subsets II
// https://leetcode.com/problems/subsets-ii/
/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:
Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  res.length = 0;
  if (!nums) {
    return res;
  }
  used.length = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length; ++i) {
    generateSubset(nums, 0, i, []);
  }
  return res;
};

let res = [];
let used = [];

function generateSubset(nums, index, k, solution) {
  if (solution.length === k) {
    res.push([...solution]);
    return;
  }
  for (let i = index; i < nums.length; ++i) {
    if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
      continue;
    }
    solution.push(nums[i]);
    used[i] = true;
    generateSubset(nums, i + 1, k, solution);
    solution.pop();
    used[i] = false;
  }
}

console.log(subsetsWithDup([2, 1, 2]));
console.log(subsetsWithDup([1, 1]));

// Runtime: 92 ms, faster than 37.50% of JavaScript online submissions for Subsets II.
// Memory Usage: 17.3 MB, less than 22.22% of JavaScript online submissions for Subsets II.