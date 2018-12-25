// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/
/*
Given two strings s and t, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true

Note:
You may assume both s and t have the same length.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const s2t = {};
  const t2s = {};
  for (let i = 0; i < s.length; ++i) {
    if (!s2t[s[i]] && !t2s[t[i]]) {
      s2t[s[i]] = t[i];
      t2s[t[i]] = s[i];
    } else if (!s2t[s[i]]) {
      return false;
    } else if (!t2s[t[i]]) {
      return false;
    } else {
      if (s2t[s[i]] !== t[i] || t2s[t[i]] !== s[i]) {
        return false;
      }
    }
  }
  return true;
};
console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('ab', 'aa'));
// Runtime: 60 ms, faster than 90.28% of JavaScript online submissions for Isomorphic Strings.