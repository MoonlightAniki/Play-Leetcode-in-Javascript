// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/
/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const freq = new Array(256);
  freq.fill(0);
  for (let ch of s.split('')) {
    ++freq[ch.charCodeAt()];
  }
  for (let ch of t.split('')) {
    if (freq[ch.charCodeAt()] === 0) {
      return false;
    } else {
      --freq[ch.charCodeAt()];
    }
  }
  return true;
};

console.log(isAnagram('a', 'b'));

// Runtime: 72 ms, faster than 61.95% of JavaScript online submissions for Valid Anagram.