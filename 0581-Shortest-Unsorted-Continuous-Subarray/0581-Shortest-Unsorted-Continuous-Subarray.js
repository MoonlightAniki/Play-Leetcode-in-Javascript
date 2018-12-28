// 581. Shortest Unsorted Continuous Subarray
// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
/*
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order,
then the whole array will be sorted in ascending order, too.
You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  if (!nums || nums.length <= 1) {
    return 0;
  }
  let sortedNums = nums.slice().sort((a, b) => a - b);
  let [i, j] = [0, nums.length - 1];
  for (; i < nums.length; ++i) {
    if (nums[i] !== sortedNums[i]) {
      break;
    }
  }
  for (; j >= 0; --j) {
    if (nums [j] !== sortedNums[j]) {
      break;
    }
  }
  if (i > j) {
    return 0;
  }
  return j - i + 1;
};
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([1, 2, 3, 4, 5]));
console.log(findUnsortedSubarray([5, 4, 3, 2, 1]));
// Runtime: 108 ms, faster than 52.70% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
