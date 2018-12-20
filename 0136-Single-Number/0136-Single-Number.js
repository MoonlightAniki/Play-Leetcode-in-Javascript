// 136. Single Number
// https://leetcode.com/problems/single-number/
/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
};

console.log(singleNumber([2, 2, 100]));

// Runtime: 60 ms, faster than 74.01% of JavaScript online submissions for Single Number.
