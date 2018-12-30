// 46. Permutations
// https://leetcode.com/problems/permutations/
/*
Given a collection of distinct integers, return all possible permutations.

Example:
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var used;
var res;

var permute = function (nums) {
  res = [];
  used = new Array(nums.length);
  used.fill(false);
  generatePermutation(nums, []);
  return res;
};

function generatePermutation(nums, solution) {
  if (solution.length === nums.length) {
    res.push([...solution]);
    return;
  }
  for (let i = 0; i < nums.length; ++i) {
    if (!used[i]) {
      solution.push(nums[i]);
      used[i] = true;
      generatePermutation(nums, solution);
      solution.pop();
      used[i] = false;
    }
  }
}

console.log(permute([1, 2, 3]));
// Runtime: 68 ms, faster than 93.74% of JavaScript online submissions for Permutations.