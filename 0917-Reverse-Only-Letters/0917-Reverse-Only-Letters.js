// 917. Reverse Only Letters
// https://leetcode.com/problems/reverse-only-letters/
/*
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

Example 1:
Input: "ab-cd"
Output: "dc-ba"

Example 2:
Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

Note:
S.length <= 100
33 <= S[i].ASCIIcode <= 122
S doesn't contain \ or "
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  if (!s || s.length <= 1) {
    return s;
  }
  const arr = s.split('');
  let [i, j] = [0, arr.length - 1];
  while (true) {
    while (i < j && !isLetter(arr[i])) {
      ++i;
    }
    while (j > i && !isLetter(arr[j])) {
      --j;
    }
    if (i >= j) {
      break;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    ++i;
    --j;
  }
  return arr.join('');
};

function isLetter(ch) {
  let code = ch.charCodeAt();
  return (code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt()) || (code >= 'A'.charCodeAt() && code <= 'Z'.charCodeAt());
}
// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Reverse Only Letters.