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

let max_amount;
let memo;

const _search = (coins, amount) => {
  if (amount === 0) return 0;
  if (memo[amount] !== -1) return memo[amount];
  let res = max_amount;
  coins.forEach(coin => {
    if (amount >= coin) {
      res = Math.min(res, 1 + _search(coins, amount - coin));
    }
  });
  memo[amount] = res;
  return res;
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
  if (!coins || amount < 0) return -1;
  if (amount === 0) return 0;
  max_amount = amount + 1;
  memo = [];
  for (let i = 0; i <= amount; ++i) memo[i] = -1;
  const res = _search(coins, amount);
  return res === max_amount ? -1 : res;
};

console.log(coinChange([1], 11));
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1], 0));
/*
Time Complexity: coin.length * amount
Runtime: 168 ms, faster than 25.29% of JavaScript online submissions for Coin Change.
Memory Usage: 51.1 MB, less than 9.09% of JavaScript online submissions for Coin Change.
 */