// 1. Two Sum
/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; ++i) {
    if (hash[target - nums[i]] != undefined) {
      return [hash[target - nums[i]], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
// Runtime: 84 ms, faster than 59.29% of JavaScript online submissions for Two Sum.