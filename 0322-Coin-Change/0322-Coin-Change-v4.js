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
  const MAX_AMOUNT = amount + 1;
  const dp = [];
  dp[0] = 0;
  for (let i = 1; i < MAX_AMOUNT; ++i) dp[i] = MAX_AMOUNT;
  coins.forEach(coin => {
    for (let j = coin; j <= amount; ++j) {
      dp[j] = Math.min(dp[j], 1 + dp[j - coin]);
    }
  });
  return dp[amount] === MAX_AMOUNT ? -1 : dp[amount];
};

console.log(coinChange([1], 11));
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1], 0));
/*
Runtime: 80 ms, faster than 93.64% of JavaScript online submissions for Coin Change.
Memory Usage: 40.4 MB, less than 9.09% of JavaScript online submissions for Coin Change.
 */