// 77. Combinations
// https://leetcode.com/problems/combinations/
/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  res.length = 0;
  if (k > n) {
    return res;
  }
  generateCombination(n, k, [], 1);
  return res;
};

const res = [];

function generateCombination(n, k, path, index) {
  if (path.length === k) {
    res.push([...path]);
    return;
  }
  for (let i = index; i <= n; ++i) {
    path.push(i);
    generateCombination(n, k, path, i + 1);
    path.pop();
  }
}

console.log(combine(4, 2));
// Runtime: 112 ms, faster than 76.81% of JavaScript online submissions for Combinations.
