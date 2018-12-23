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
  const freq = new Array(256);
  freq.fill(0);

  for (let i = 0; i < s.length; ++i) {
    ++freq[s.charCodeAt(i)];
  }

  let res = 0;
  let hasOdd = false;
  for (let count of freq) {
    if (count % 2 === 0) {
      res += count;
    } else {
      res += count - 1;
      hasOdd = true;
    }
  }
  if (hasOdd) {
    ++res;
  }
  return res;
};
// Runtime: 72 ms, faster than 15.54% of JavaScript online submissions for Longest Palindrome.