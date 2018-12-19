// 344. Reverse String
// https://leetcode.com/problems/reverse-string/
/*
Write a function that takes a string as input and returns the string reversed.

Example 1:
Input: "hello"
Output: "olleh"

Example 2:
Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  return [...s].reverse().join('');
};
console.log(reverseString('hello world'));
// Runtime: 84 ms, faster than 27.39% of JavaScript online submissions for Reverse String.