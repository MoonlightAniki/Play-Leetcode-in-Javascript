// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/
/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Input: "hello"
Output: "holle"

Example 2:
Input: "leetcode"
Output: "leotcede"

Note:
The vowels does not include the letter "y".
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const arr = s.split('');
  let [i, j] = [0, arr.length - 1];
  while (true) {
    while (i < j && !isVowel(arr[i])) {
      ++i;
    }
    while (j > i && !isVowel(arr[j])) {
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

function isVowel(s) {
  return 'aeiouAEIOU'.indexOf(s) != -1;
}

// Runtime: 80 ms, faster than 84.23% of JavaScript online submissions for Reverse Vowels of a String.