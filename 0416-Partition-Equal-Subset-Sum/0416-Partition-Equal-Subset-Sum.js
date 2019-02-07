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
  sum /= 2;
  // 从nums中选取若干个物品恰好填满容量为sum的背包
  const dp = [];
  for (let j = 0; j <= sum; ++j) {
    dp[j] = nums[0] === j;
  }
  for (let i = 1; i < nums.length; ++i) {
    for (let j = sum; j >= nums[i]; --j) {
      dp[j] = dp[j] || dp[j - nums[i]];// 两种方案：将第i件物品加入或者不将第i件物品加入
    }
  }
  return dp[sum];
};

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
console.log(canPartition([1, 2, 10, 5]));
/*
Runtime: 108 ms, faster than 57.78% of JavaScript online submissions for Partition Equal Subset Sum.
Memory Usage: 18 MB, less than 45.00% of JavaScript online submissions for Partition Equal Subset Sum.
 */