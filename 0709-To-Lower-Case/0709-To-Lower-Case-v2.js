// 709. To Lower Case
/*
Example 1:
Input: "Hello"
Output: "hello"

Example 2:
Input: "here"
Output: "here"

Example 3:
Input: "LOVELY"
Output: "lovely"
 */

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  return str.replace(/[A-Z]/g, c => String.fromCharCode(c.charCodeAt(0) + 32));
};

console.log(toLowerCase('Hello'));
// Runtime: 52 ms, faster than 32.34% of JavaScript online submissions for To Lower Case.