// 171. Excel Sheet Column Number
// https://leetcode.com/problems/excel-sheet-column-number/
/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...

Example 1:
Input: "A"
Output: 1

Example 2:
Input: "AB"
Output: 28

Example 3:
Input: "ZY"
Output: 701
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let res = 0;
  for (let c of s.split('')) {
    res = res * 26 + (c.charCodeAt() - 'A'.charCodeAt() + 1);
  }
  return res;
};

console.log(titleToNumber('ZY'));

// Runtime: 72 ms, faster than 53.65% of JavaScript online submissions for Excel Sheet Column Number.