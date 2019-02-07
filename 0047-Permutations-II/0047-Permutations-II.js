// 47. Permutations II
// https://leetcode.com/problems/permutations-ii/
/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  res = [];
  if (!nums || !nums.length) {
    return res;
  }
  nums.sort((a, b) => a - b);
  used = [];
  generatePermutations(nums, []);
  return res;
};

let res;
let used;

function generatePermutations(nums, solution) {
  if (solution.length === nums.length) {
    res.push([...solution]);
    return;
  }
  for (let i = 0; i < nums.length; ++i) {
    if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
      continue;
    }
    if (!used[i]) {
      solution.push(nums[i]);
      used[i] = true;
      generatePermutations(nums, solution);
      solution.pop();
      used[i] = false;
    }
  }
}

console.log(permuteUnique([1, 1, 2]));
/*
Runtime: 148 ms, faster than 23.61% of JavaScript online submissions for Permutations II.
Memory Usage: 18.7 MB, less than 21.60% of JavaScript online submissions for Permutations II.
 */