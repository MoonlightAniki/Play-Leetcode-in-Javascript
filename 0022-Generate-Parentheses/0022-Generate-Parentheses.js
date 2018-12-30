// 22. Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/
/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
For example, given n = 3, a solution set is:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  res.push(['']);
  for (let i = 1; i <= n; ++i) {
    const solution = [];
    for (let j = 0; j < i; ++j) {
      for (let left of res[j]) {
        for (let right of res[i - 1 - j]) {
          solution.push(`(${left})${right}`);
        }
      }
    }
    res.push(solution);
  }
  return res[n];
};
console.log(generateParenthesis(3));
// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Generate Parentheses.