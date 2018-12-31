// 676. Implement Magic Dictionary
// https://leetcode.com/problems/implement-magic-dictionary/
/*
Implement a magic directory with buildDict, and search methods.
For the method buildDict, you'll be given a list of non-repetitive words to build a dictionary.
For the method search, you'll be given a word, and judge whether if you modify exactly one character into another character
in this word, the modified word is in the dictionary you just built.

Example 1:
Input: buildDict(["hello", "leetcode"]), Output: Null
Input: search("hello"), Output: False
Input: search("hhllo"), Output: True
Input: search("hell"), Output: False
Input: search("leetcoded"), Output: False

Note:
You may assume that all the inputs are consist of lowercase letters a-z.
For contest purpose, the test data is rather small by now. You could think about highly efficient algorithm after the contest.
Please remember to RESET your class variables declared in class MagicDictionary, as static/class variables are persisted across
multiple test cases. Please see here for more details.
 */

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
  this.dict = [];
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dict) {
  this.dict.push(...dict);
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (word) {
  for (let w of this.dict) {
    if (this.__magicEquals(w, word)) {
      return true;
    }
  }
  return false;
};

MagicDictionary.prototype.__magicEquals = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let diffCount = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] !== t[i]) {
      ++diffCount;
      if (diffCount > 1) {
        return false;
      }
    }
  }
  return diffCount === 1;
};
// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Implement Magic Dictionary.