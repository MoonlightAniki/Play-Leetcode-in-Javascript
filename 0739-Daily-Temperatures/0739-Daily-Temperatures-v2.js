// 739. Daily Temperatures
/*
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would
have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
 */

/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const records = [];
  for (let t = 0; t <= 100; ++t) {
    records.push([]);
  }
  for (let i = 0; i < temperatures.length; ++i) {
    records[temperatures[i]].push(i);
  }
  const result = [];
  for (let i = 0; i < temperatures.length; ++i) {
    const future = getWarmerDay(temperatures[i], i, records);
    if (future === -1) {
      result.push(0);
    } else {
      result.push(future - i);
    }
  }
  return result;
};

const getWarmerDay = (temperature, curDay, records) => {
  let res = Number.MAX_SAFE_INTEGER;
  for (let t = temperature + 1; t <= 100; ++t) {
    const index = upperBound(records[t], curDay);
    if (index !== records[t].length) {
      res = Math.min(res, records[t][index])
    }
  }
  return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};

const upperBound = (nums, target) => {
  return _upperBound(nums, 0, nums.length - 1, target);
};

const _upperBound = (nums, l, r, target) => {
  if (l > r) {
    return r + 1;
  }
  const mid = l + ((r - l) / 2) | 0;
  if (nums[mid] <= target) {
    return _upperBound(nums, mid + 1, r, target);
  } else {
    return _upperBound(nums, l, mid - 1, target);
  }
};

const T = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(T));
/*
Runtime: 388 ms, faster than 46.69% of JavaScript online submissions for Daily Temperatures.
Memory Usage: 47 MB, less than 13.51% of JavaScript online submissions for Daily Temperatures.
 */