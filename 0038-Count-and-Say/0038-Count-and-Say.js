// 38. Count and Say
// https://leetcode.com/problems/count-and-say/
/*
The count-and-say sequence is the sequence of integers with the first five terms as following:
1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:
Input: 1
Output: "1"

Example 2:
Input: 4
Output: "1211"
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let res = '1';
  for (let i = 1; i < n; ++i) {
    res = _countAndSay(res);
  }
  return res;
};


function _countAndSay(s) {
  if (!s || s.length === 0) {
    return '';
  }
  let curNum = s[0];
  let curCount = 1;
  let res = '';
  for (let i = 1; i < s.length; ++i) {
    if (s[i] === curNum) {
      ++curCount;
    } else {
      res += curCount.toString();
      res += curNum;

      curNum = s[i];
      curCount = 1;
    }
  }
  res += curCount.toString();
  res += curNum;
  return res;
}

console.log(countAndSay(4));

// Runtime: 56 ms, faster than 75.04% of JavaScript online submissions for Count and Say.