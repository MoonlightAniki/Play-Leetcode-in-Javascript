// 677. Map Sum Pairs
// https://leetcode.com/problems/map-sum-pairs/
/*
Implement a MapSum class with insert, and sum methods.
For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents
the value. If the key already existed, then the original key-value pair will be overridden to the new one.
For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value
whose key starts with the prefix.

Example 1:
Input: insert("apple", 3), Output: Null
Input: sum("ap"), Output: 3
Input: insert("app", 2), Output: Null
Input: sum("ap"), Output: 5
 */

/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.map = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.map[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let sum = 0;
  for (let key of Object.keys(this.map)) {
    if (key.startsWith(prefix)) {
      sum += this.map[key];
    }
  }
  return sum;
};
// Runtime: 56 ms, faster than 60.34% of JavaScript online submissions for Map Sum Pairs.