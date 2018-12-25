// 438. Find All Anagrams in a String
// https://leetcode.com/problems/find-all-anagrams-in-a-string/
/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
The order of output does not matter.

Example 1:
Input:
s: "cbaebabacd" p: "abc"
Output:
[0, 6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input:
s: "abab" p: "ab"
Output:
[0, 1, 2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let res = [];
  if (s === null || s.length === 0 || p === null || p.length === 0 || s.length < p.length) {
    return res;
  }
  const freq_p = new Array(26);
  freq_p.fill(0);
  for (let i = 0; i < p.length; ++i) {
    ++freq_p[p.charCodeAt(i) - 97];
  }
  let [l, r] = [0, -1];//[l...r]为滑动窗口
  const freq_s = new Array(26);
  freq_s.fill(0);
  while (r + 1 < s.length) {
    ++r;
    ++freq_s[s.charCodeAt(r) - 97];
    if (r - l + 1 > p.length) {
      --freq_s[s.charCodeAt(l++) - 97];
    }
    if (r - l + 1 === p.length && same(freq_s, freq_p)) {
      res.push(l);
    }
  }
  return res;
};

function same(p, q) {
  for (let i = 0; i < p.length; ++i) {
    if (p[i] !== q[i]) {
      return false;
    }
  }
  return true;
}

console.log(findAnagrams('cbaebabacd', 'abc'));
// Runtime: 88 ms, faster than 92.83% of JavaScript online submissions for Find All Anagrams in a String.