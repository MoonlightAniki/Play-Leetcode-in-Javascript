// 485. Max Consecutive Ones
// https://leetcode.com/problems/max-consecutive-ones/
/*
Given a binary array, find the maximum number of consecutive 1s in this array.
Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:
The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let [maxSoFar, maxEndingHere] = [0, 0];
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      maxEndingHere = 0;
    } else {
      ++maxEndingHere;
    }
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0]));

// Runtime: 72 ms, faster than 44.81% of JavaScript online submissions for Max Consecutive Ones.