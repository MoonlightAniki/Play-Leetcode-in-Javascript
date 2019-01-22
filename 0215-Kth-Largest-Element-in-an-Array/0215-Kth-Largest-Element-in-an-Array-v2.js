// 215. Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/
/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:
Input: [3,2,1,5,6,4] and k = 2
Output: 5

Example 2:
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return findKthElement(nums, 0, nums.length - 1, nums.length - k);
};

function findKthElement(nums, l, r, k) {
  if (l === r) {
    return nums[l];
  }
  const random = Math.floor(Math.random() * (r - l + 1)) + l;
  [nums[l], nums[random]] = [nums[random], nums[l]];
  const v = nums[l];
  let p = l;//nums[l+1...p]<v, nums[p+1...r]>=v
  for (let i = l + 1; i <= r; ++i) {
    if (nums[i] < v) {
      [nums[p + 1], nums[i]] = [nums[i], nums[p + 1]];
      ++p;
    }
  }
  [nums[l], nums[p]] = [nums[p], nums[l]];//nums[l...p)<v, nums(p...r]>=v
  if (k === p) {
    return v;
  } else if (k < p) {
    return findKthElement(nums, l, p - 1, k);
  } else {
    return findKthElement(nums, p + 1, r, k);
  }
}


const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k));
// Runtime: 80 ms, faster than 40.39% of JavaScript online submissions for Kth Largest Element in an Array.