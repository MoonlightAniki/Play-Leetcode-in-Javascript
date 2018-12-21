// 448. Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:
Input:
[4,3,2,7,8,2,3,1]
Output:
[5,6]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const res = [];
  if (!nums) {
    return res;
  }
  for (let i = 0; i < nums.length; ++i) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] *= -1;
    }
  }
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
// Runtime: 104 ms, faster than 99.38% of JavaScript online submissions for Find All Numbers Disappeared in an Array.