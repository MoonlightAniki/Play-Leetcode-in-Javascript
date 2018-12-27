// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/
/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

Example:
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
Output: [1,2,2,3,5,6]
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const aux = nums1.slice(0, m);
  let [i, j] = [0, 0];
  for (let k = 0; k < m + n; ++k) {
    if (i >= m) {
      nums1[k] = nums2[j++];
    } else if (j >= n) {
      nums1[k] = aux[i++];
    } else if (aux[i] <= nums2[j]) {
      nums1[k] = aux[i++];
    } else {
      nums1[k] = nums2[j++];
    }
  }
};
// Runtime: 56 ms, faster than 72.84% of JavaScript online submissions for Merge Sorted Array.