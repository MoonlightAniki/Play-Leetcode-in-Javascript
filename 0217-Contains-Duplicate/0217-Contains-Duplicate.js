// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/
/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:
Input: [1,2,3,1]
Output: true

Example 2:
Input: [1,2,3,4]
Output: false

Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const records = {};
  for (let num of nums) {
    if (records[num]) {
      return true;
    } else {
      records[num] = true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 2, 3, 4]));

// Runtime: 76 ms, faster than 69.00% of JavaScript online submissions for Contains Duplicate.