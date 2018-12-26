// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s === null) {
    return false;
  }
  if (s.length % 2 === 1) {
    return false;
  }
  const stack = [];
  for (let c of s.split('')) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else {
      const top = stack.pop();
      if (c === ')' && top !== '(') {
        return false;
      }
      if (c === ']' && top !== '[') {
        return false;
      }
      if (c === '}' && top !== '{') {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(isValid(''));
// Runtime: 56 ms, faster than 58.60% of JavaScript online submissions for Valid Parentheses.