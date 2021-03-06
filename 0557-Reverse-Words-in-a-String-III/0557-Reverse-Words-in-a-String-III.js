// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/
/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  if (s === null || s.length === 0) {
    return s;
  }
  return s.split(' ').map(word => [...word].reverse().join('')).join(' ');
};

console.log(reverseWords('Let\'s take LeetCode contest'));

// Runtime: 108 ms, faster than 20.13% of JavaScript online submissions for Reverse Words in a String III.