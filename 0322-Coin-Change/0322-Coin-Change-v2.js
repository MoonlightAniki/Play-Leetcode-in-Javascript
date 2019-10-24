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
const coinChange = function(coins, amount) {
  if (!coins || amount < 0) return -1;
  if (amount === 0) return 0;
  const MAX_AMOUNT = amount + 1;
  const dp = [];
  for (let j = 0; j < MAX_AMOUNT; ++j) {
    dp[j] = j % coins[0] === 0 ? j / coins[0] : MAX_AMOUNT;
  }
  for (let i = 1; i < coins.length; ++i) {
    for (let j = amount; j >= 0; --j) {
      // k 为使用coins[i]的个数
      for (let k = 1; k <= ((j / coins[i]) | 0); ++k) {
        if (j >= coins[i] * k) {
          dp[j] = Math.min(dp[j], k + dp[j - coins[i] * k]);
        }
      }
    }
  }
  return dp[amount] === MAX_AMOUNT ? -1 : dp[amount];
};

console.log(coinChange([1], 11));
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1], 0));
/*
Runtime: 824 ms, faster than 5.13% of JavaScript online submissions for Coin Change.
Memory Usage: 39.6 MB, less than 9.09% of JavaScript online submissions for Coin Change.
 */