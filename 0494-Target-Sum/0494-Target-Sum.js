// 494. Target Sum
// https://leetcode.com/problems/target-sum/
/*
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each
integer, you should choose one from + and - as its new symbol.
Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:
Input: nums is [1, 1, 1, 1, 1], S is 3.
Output: 5
Explanation:
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
There are 5 ways to assign symbols to make the sum of nums be target 3.

Note:
The length of the given array is positive and will not exceed 20.
The sum of elements in the given array will not exceed 1000.
Your output answer is guaranteed to be fitted in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

/*
加负号的整数的和为S1, 加正号的整数的和为S2, 则有 S2-S1=S
数组的元素和为Sum，则有 S1+S2=Sum
以上两式相加则有 2*S2=S+Sum => S2=(S+Sum)/2
问题转化成要在数组中选取任意多个数字的和等于(S+Sum)/2
背包问题：从nums中取若干件物品填充容量为(S+Sum)/2的背包
 */
var findTargetSumWays = function (nums, S) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  if (sum < S) {
    return 0;
  }
  if (sum + S < 0) {
    return 0;
  }
  if ((sum + S) % 2) {
    return 0;
  }
  sum = (sum + S) / 2;
  return subsetSum(nums, sum);
};

// function subsetSum(nums, c) {
//   const dp = [];
//   dp.length = c + 1;
//   dp.fill(0);
//   dp[0] = 1;
//   for (let i = 0; i < nums.length; ++i) {
//     for (let j = c; j >= nums[i]; --j) {
//       dp[j] += dp[j - nums[i]];
//     }
//   }
//   return dp[c];
// }

function subsetSum(nums, c) {
  const dp = [];
  dp[0] = nums[0] === 0 ? 2 : 1;//如果第0件物品的重量为0则有两种填充方案(放入或者不放入)，否则只有一种填充方案(不放入)
  for (let j = 1; j <= c; ++j) {
    dp[j] = nums[0] === j ? 1 : 0;
  }
  for (let i = 1; i < nums.length; ++i) {
    for (let j = c; j >= nums[i]; --j) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[c];
}

const nums = [0, 0, 1];
const S = 1;
console.log(findTargetSumWays(nums, S));
// Runtime: 76 ms, faster than 92.62% of JavaScript online submissions for Target Sum.