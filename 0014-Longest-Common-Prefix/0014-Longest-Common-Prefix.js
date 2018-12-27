// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/
/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  let res = strs[0];
  for (let i = 1; i < strs.length;) {
    if (strs[i].indexOf(res) !== 0) {
      res = res.substr(0, res.length - 1);
    } else {
      ++i;
    }
  }
  return res;
};
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Longest Common Prefix.