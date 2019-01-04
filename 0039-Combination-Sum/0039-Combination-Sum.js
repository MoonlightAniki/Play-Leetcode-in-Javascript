// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/
/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations
in candidates where the candidate numbers sums to target.
The same repeated number may be chosen from candidates unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Example 2:
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  res.length = 0;
  candidates.sort((a, b) => a - b);//对数组排序后速度更快
  generateCombination(candidates, target, [], 0);
  return res;
};

const res = [];

function generateCombination(nums, target, solution, index) {
  if (target < 0) {
    return;
  }
  if (target === 0) {
    res.push([...solution]);
    return;
  }
  for (let i = index; i < nums.length; ++i) {
    solution.push(nums[i]);
    generateCombination(nums, target - nums[i], solution, i);
    solution.pop();
  }
}

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
// Runtime: 72 ms, faster than 92.54% of JavaScript online submissions for Combination Sum.