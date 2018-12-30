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
  if (!s || s.length === 0) {
    return s;
  }
  const freq = {};
  for (let c of s) {
    freq[c] = (freq[c] || 0) + 1;
  }
  const sorted = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
  let res = '';
  for (let c of sorted) {
    res += c.repeat(freq[c]);
  }
  return res;
};
console.log(frequencySort('aAbb'));
console.log(frequencySort('eeeee'));
// Runtime: 72 ms, faster than 79.88% of JavaScript online submissions for Sort Characters By Frequency.