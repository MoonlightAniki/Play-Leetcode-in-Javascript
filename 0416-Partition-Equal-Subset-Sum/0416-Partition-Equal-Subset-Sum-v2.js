// 416. Partition Equal Subset Sum
// https://leetcode.com/problems/partition-equal-subset-sum/
/*
Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that
the sum of elements in both subsets is equal.

Note:
Each of the array element will not exceed 100.
The array size will not exceed 200.

Example 1:
Input: [1, 5, 11, 5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

Example 2:
Input: [1, 2, 3, 5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0;
  nums.forEach(i => sum += i);
  if (sum % 2) return false;
  memo = [];
  for (let i = 0; i < nums.length; ++i) {
    memo.push([]);
  }
  return tryPartition(nums, nums.length - 1, sum / 2);
};

let memo;

// 考虑使用nums[0...index]内元素填满容量为sum的背包
function tryPartition(nums, index, sum) {
  if (sum === 0) {
    return true;
  }
  if (sum < 0 || index < 0) {
    return false;
  }
  if (memo[index][sum] !== undefined) {
    return memo[index][sum];
  }
  // 两种方案：不将index位置的物品加入背包；将index位置的物品加入背包
  memo[index][sum] = tryPartition(nums, index - 1, sum) || tryPartition(nums, index - 1, sum - nums[index]);
  return memo[index][sum];
}

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
console.log(canPartition([1, 2, 10, 5]));
/*
Runtime: 336 ms, faster than 15.55% of JavaScript online submissions for Partition Equal Subset Sum.
Memory Usage: 22.5 MB, less than 38.33% of JavaScript online submissions for Partition Equal Subset Sum.
 */