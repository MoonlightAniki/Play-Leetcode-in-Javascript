// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/
/*
Given an array of strings, group anagrams together.

Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

Note:
All inputs will be in lowercase.
The order of your output does not matter.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  for (let str of strs) {
    const anagram = getAnagram(str);
    if (!map[anagram]) {
      map[anagram] = [];
    }
    map[anagram].push(str);
  }
  return Object.values(map);
};


function getAnagram(str) {
  return str.split('').sort().join('');
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Runtime: 188 ms, faster than 35.00% of JavaScript online submissions for Group Anagrams.