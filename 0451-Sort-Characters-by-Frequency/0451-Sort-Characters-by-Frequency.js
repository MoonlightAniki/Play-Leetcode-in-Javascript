// 451. Sort Characters By Frequency
// https://leetcode.com/problems/sort-characters-by-frequency/
/*
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:
Input:
"tree"
Output:
"eert"
Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:
Input:
"cccaaa"
Output:
"cccaaa"
Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:
Input:
"Aabb"
Output:
"bbAa"
Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
 */
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const freq = new Map();
  for (let c of s) {
    freq.set(c, (freq.get(c) || 0) + 1);
  }
  const bucket = new Array(s.length + 1);
  for (let [key, value] of freq) {
    if (!bucket[value]) {
      bucket[value] = [];
    }
    bucket[value].push(key);
  }
  let res = '';
  for (let i = s.length; i >= 0; --i) {
    if (bucket[i]) {
      for (let c of bucket[i]) {
        res += c.repeat(i);
      }
    }
  }
  return res;
};
console.log(frequencySort('aAbb'));
console.log(frequencySort('eeeee'));
// Runtime: 80 ms, faster than 72.78% of JavaScript online submissions for Sort Characters By Frequency.