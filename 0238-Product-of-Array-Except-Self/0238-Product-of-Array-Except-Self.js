// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/
/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  if (!nums || !nums.length) {
    return [];
  }
  const leftProduct = [];
  leftProduct.push(nums[0]);
  for (let i = 1; i < nums.length - 1; ++i) {
    leftProduct.push(leftProduct[i - 1] * nums[i]);
  }
  const res = new Array(nums.length);
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; --i) {
    res[i] = i === 0 ? rightProduct : leftProduct[i - 1] * rightProduct;
    rightProduct *= nums[i];
  }
  return res;
};
// Runtime: 84 ms, faster than 100.00% of JavaScript online submissions for Product of Array Except Self.