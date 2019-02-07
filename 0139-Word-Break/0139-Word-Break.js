// 139. Word Break
// https://leetcode.com/problems/word-break/
/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented
into a space-separated sequence of one or more dictionary words.

Note:
The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example 1:
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
 */


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (wordDict.length === 0) {
    return false;
  }
  const set = {};
  wordDict.forEach(element => {
    if (!set[element]) {
      set[element] = true;
    }
  });
  const dp = [];//dp[index]表示s[0...index)能否由set中的元素组成
  dp[0] = true;
  for (let i = 1; i <= s.length; ++i) {
    for (let j = i - 1; j >= 0; --j) {
      if (dp[j] && set[s.substr(j, i - j)]) {
        dp[i] = true;
        break;
      }
    }
  }
  return !!dp[s.length];
};
console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
/*
Runtime: 84 ms, faster than 25.57% of JavaScript online submissions for Word Break.
Memory Usage: 17.7 MB, less than 9.85% of JavaScript online submissions for Word Break.
 */