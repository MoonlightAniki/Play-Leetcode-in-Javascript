// 216. Combination Sum III
// https://leetcode.com/problems/combination-sum-iii/
/*
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and
each combination should be a unique set of numbers.

Note:
All numbers will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
Input: k = 3, n = 7
Output: [[1,2,4]]

Example 2:
Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  res.length = 0;
  generateCombination(k, n, [], 0, 1);
  return res;
};

const res = [];

const generateCombination = function (k, n, solution, sum, num) {
  if (sum > n) {
    return;
  }
  if (solution.length === k) {
    if (sum === n) {
      res.push([...solution]);
      return;
    } else {
      return;
    }
  }
  for (let i = num; i <= 9; ++i) {
    solution.push(i);
    generateCombination(k, n, solution, sum + i, i + 1);
    solution.pop();
  }
};

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
// Runtime: 52 ms, faster than 87.50% of JavaScript online submissions for Combination Sum III.