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
  const n = nums.length;
  let l = 0;//nums[0...l]为左侧最长的上升子序列
  let r = n - 1;//nums[r...n-1]为右侧最长的上升子序列
  while (l + 1 < n && nums[l] <= nums[l + 1]) {
    ++l;
  }
  if (l === r) {
    return 0;
  }
  while (r - 1 >= 0 && nums[r - 1] <= nums[r]) {
    --r;
  }
  //查找nums[l...r]范围内的最小值和最大值
  let [min, max] = [nums[l], nums[l]];
  for (let i = l + 1; i <= r; ++i) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }
  while (l >= 0 && nums[l] > min) {
    --l;
  }
  while (r < n && nums[r] < max) {
    ++r;
  }
  // console.log(`l = ${l}, r = ${r}`);
  return r - l - 1;
};
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
