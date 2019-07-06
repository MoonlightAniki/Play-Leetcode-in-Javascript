// 739. Daily Temperatures
/*
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would
have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const next = [];
  const result = [];
  for (let i = temperatures.length - 1; i >= 0; --i) {
    let ret = Number.MAX_SAFE_INTEGER;
    for (let t = temperatures[i] + 1; t <= 100; ++t) {
      if (next[t] !== undefined && next[t] < ret) {
        ret = next[t];
      }
    }
    result[i] = ret === Number.MAX_SAFE_INTEGER ? 0 : ret - i;
    next[temperatures[i]] = i;
  }
  return result;
};


const T = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(T));
/*
Runtime: 212 ms, faster than 52.00% of JavaScript online submissions for Daily Temperatures.
Memory Usage: 42.8 MB, less than 33.63% of JavaScript online submissions for Daily Temperatures.
 */