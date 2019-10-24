//  https://leetcode.com/problems/coin-change/
//  322. Coin Change
/*
    You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

    Example 1:
    Input: coins = [1, 2, 5], amount = 11
    Output: 3
    Explanation: 11 = 5 + 5 + 1

    Example 2:
    Input: coins = [2], amount = 3
    Output: -1

    Note:
    You may assume that you have an infinite number of each kind of coin.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (!coins || amount < 0) return -1;

  if (!amount) return 0;

  const nums = [];
  coins.forEach(coin => {
    for (let i = 0; i < amount / coin; ++i) {
      nums.push(coin);
    }
  });

  const dp = [];
  const MAX_AMOUNT = amount + 1;
  for (let j = 0; j <= amount; ++j) {
    dp[j] = j % nums[0] === 0 ? j / nums[0] : MAX_AMOUNT;
  }
  for (let i = 1; i < nums.length; ++i) {
    for (let j = amount; j >= 0; --j) {
      if (j >= nums[i] && dp[j - nums[i]] !== MAX_AMOUNT) {
        dp[j] = Math.min(dp[j], 1 + dp[j - nums[i]]);
      }
    }
  }
  return dp[amount] === MAX_AMOUNT ? -1 : dp[amount];
};

console.log(coinChange([1], 11));
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1], 0));
/*
Time Complexity: coin.length * amount * amount
Runtime: 1952 ms, faster than 5.13% of JavaScript online submissions for Coin Change.
Memory Usage: 39.6 MB, less than 9.09% of JavaScript online submissions for Coin Change.
 */