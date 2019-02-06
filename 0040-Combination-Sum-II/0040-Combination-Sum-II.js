// 40. Combination Sum II
// https://leetcode.com/problems/combination-sum-ii/
/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates
where the candidate numbers sums to target.
Each number in candidates may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

Example 2:
Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
 */


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  res = [];
  if (!candidates) {
    return res;
  }
  candidates.sort((a, b) => a - b);
  used = [];
  generateCombination(candidates, target, 0, []);
  return res;
};

let res;
let used;

function generateCombination(nums, target, index, path) {
  if (target === 0) {
    res.push([...path]);
    return;
  }
  if (target < 0) {
    return;
  }
  for (let i = index; i < nums.length; ++i) {
    if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) {
      continue;
    }
    if (target - nums[i] < 0) {
      break;
    }
    path.push(nums[i]);
    used[i] = true;
    generateCombination(nums, target - nums[i], i + 1, path);
    path.pop();
    used[i] = false;
  }
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
/*
Runtime: 88 ms, faster than 52.05% of JavaScript online submissions for Combination Sum II.
Memory Usage: 17.1 MB, less than 28.23% of JavaScript online submissions for Combination Sum II.
 */