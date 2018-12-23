// 409. Longest Palindrome
// https://leetcode.com/problems/longest-palindrome/
/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:
Input:
"abccccdd"
Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const freq = {};
  let res = 0;
  for (let i = 0; i < s.length; ++i) {
    if (freq[s[i]] === undefined) {
      freq[s[i]] = 1;
    } else if (freq[s[i]] === 1) {
      res += 2;
      freq[s[i]] = undefined;
    }
  }
  if (s.length > res) {
    ++res;
  }
  return res;
};
// Runtime: 60 ms, faster than 90.04% of JavaScript online submissions for Longest Palindrome.