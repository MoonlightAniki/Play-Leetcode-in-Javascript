// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/
/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let [i, j] = [0, s.length - 1];
  while (true) {
    while (i < j && !isAlphanumeric(s[i])) {
      ++i;
    }
    while (j > i && !isAlphanumeric(s[j])) {
      --j;
    }
    if (i >= j) {
      return true;
    }
    if (!equalsIgnoreCase(s[i], s[j])) {
      return false;
    }
    ++i;
    --j;
  }
};

function isAlphanumeric(s) {
  return 'abcdefghijklmnoqprstuvwxyz0123456789ABCDEFGHIJKLMNOQPRSTUVWXYZ'.indexOf(s) !== -1;
}

function equalsIgnoreCase(s, t) {
  return s.toLowerCase() === t.toLowerCase();
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
// Runtime: 68 ms, faster than 82.64% of JavaScript online submissions for Valid Palindrome.