// 169. Majority Element
// https://leetcode.com/problems/majority-element/
/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
Input: [3,2,3]
Output: 3

Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const freq = new Map();
  for (let num of nums) {
    let count = freq.has(num) ? freq.get(num) + 1 : 1;
    if (count > nums.length / 2) {
      return num;
    } else {
      freq.set(num, count);
    }
  }
};
// Runtime: 68 ms, faster than 50.76% of JavaScript online submissions for Majority Element.