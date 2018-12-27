// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/
/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:
Input: "Hello World"
Output: 5
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (!s) {
    return 0;
  }
  s = s.trim();
  return s.substring(s.lastIndexOf(' ') + 1).length;
};
// Runtime: 52 ms, faster than 74.66% of JavaScript online submissions for Length of Last Word.