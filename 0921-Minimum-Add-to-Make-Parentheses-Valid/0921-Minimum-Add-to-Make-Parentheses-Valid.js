// 921. Minimum Add to Make Parentheses Valid
// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
/*
Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions )
so that the resulting parentheses string is valid.
Formally, a parentheses string is valid if and only if:
It is the empty string, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

Example 1:
Input: "())"
Output: 1

Example 2:
Input: "((("
Output: 3

Example 3:
Input: "()"
Output: 0

Example 4:
Input: "()))(("
Output: 4

Note:
S.length <= 1000
S only consists of '(' and ')' characters.
 */


/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  const stack = [];
  for (let s of S) {
    if (s === '(') {
      stack.push(s);
    } else {
      if (stack.length === 0) {
        stack.push(s);
      } else {
        let top = stack[stack.length - 1];
        if (top === '(') {
          stack.pop();
        } else {
          stack.push(s);
        }
      }
    }
  }
  return stack.length;
};
console.log(minAddToMakeValid('()))(('));
console.log(minAddToMakeValid('()()'));
console.log(minAddToMakeValid('())'));
/*
Runtime: 80 ms, faster than 12.77% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
Memory Usage: 15.8 MB, less than 7.69% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
 */