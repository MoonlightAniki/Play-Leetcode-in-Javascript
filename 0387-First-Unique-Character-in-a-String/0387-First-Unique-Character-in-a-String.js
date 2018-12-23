// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/
/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const freq = {};
  for (let c of s.split('')) {
    if (freq[c]) {
      ++freq[c];
    } else {
      freq[c] = 1;
    }
  }
  for (let i = 0; i < s.length; ++i) {
    if (freq[s.charAt(i)] === 1) {
      return i;
    }
  }
  return -1;
};
// Runtime: 104 ms, faster than 45.80% of JavaScript online submissions for First Unique Character in a String.