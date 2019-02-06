// 17. Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  res = [];
  if (!digits) {
    return res;
  }
  __letterCombinations(digits, 0, []);
  return res;
};

let res;

const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
};

function __letterCombinations(digits, index, path) {
  if (index === digits.length) {
    res.push(path.join(''));
    return;
  }
  for (let c of map[digits[index]]) {
    path.push(c);
    __letterCombinations(digits, index + 1, path);
    path.pop();
  }
}

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
/*
Runtime: 68 ms, faster than 31.53% of JavaScript online submissions for Letter Combinations of a Phone Number.
Memory Usage: 14.8 MB, less than 5.66% of JavaScript online submissions for Letter Combinations of a Phone Number.
 */