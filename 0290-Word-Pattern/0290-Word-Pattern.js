// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/
/*
Given a pattern and a string str, find if str follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:
Input: pattern = "abba", str = "dog cat cat dog"
Output: true

Example 2:
Input:pattern = "abba", str = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false

Example 4:
Input: pattern = "abba", str = "dog dog dog dog"
Output: false

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  if (pattern === null || pattern === undefined || str === null || str === undefined) {
    return false;
  }
  if (pattern.length === 0 && str.length === 0) {
    return true;
  }
  const arr = str.split(' ');
  if (pattern.length !== arr.length) {
    return false;
  }
  const p_map = {};
  const w_map = {};
  for (let i = 0; i < pattern.length; ++i) {
    if (p_map[pattern[i]] !== w_map[arr[i]]) {
      return false;
    }
    p_map[pattern[i]] = i;
    w_map[arr[i]] = i;
  }
  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));
// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Word Pattern.
