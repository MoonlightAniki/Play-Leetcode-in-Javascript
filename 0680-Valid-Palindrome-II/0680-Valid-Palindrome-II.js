// 680. Valid Palindrome II
// https://leetcode.com/problems/valid-palindrome-ii/
/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True

Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.

Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  for (let i = 0, j = s.length - 1; i < j; ++i, --j) {
    if (s[i] !== s[j]) {
      return isValidPalindrome(s, i, j - 1) || isValidPalindrome(s, i + 1, j);
    }
  }
  return true;
};

function isValidPalindrome(s, beg, end) {
  for (let i = beg, j = end; i < j; ++i , --j) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
}

// Runtime: 92 ms, faster than 99.01% of JavaScript online submissions for Valid Palindrome II.
