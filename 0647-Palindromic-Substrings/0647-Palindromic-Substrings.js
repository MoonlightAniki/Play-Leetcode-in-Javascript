// 647. Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/
/*
Given a string, your task is to count how many palindromic substrings in this string.
The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

Note:
The input string length won't exceed 1000.
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; ++i) {
    res += countPalindromes(s, i, i) + countPalindromes(s, i, i + 1);
  }
  return res;
};

function countPalindromes(s, left, right) {
  let count = 0;
  for (let i = left, j = right; i >= 0 && j < s.length && s[i] === s[j]; --i, ++j) {
    ++count;
  }
  return count;
}

console.log(countSubstrings('aaa'));
// Runtime: 60 ms, faster than 96.77% of JavaScript online submissions for Palindromic Substrings.