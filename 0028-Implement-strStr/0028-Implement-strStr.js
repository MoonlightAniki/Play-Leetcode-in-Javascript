// 28. Implement strStr()
// https://leetcode.com/problems/implement-strstr/
/*
Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack === null || haystack === undefined || needle === null || needle === undefined) {
    return -1;
  }
  return haystack.indexOf(needle);
};

console.log(strStr('hello', ''));
// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Implement strStr().