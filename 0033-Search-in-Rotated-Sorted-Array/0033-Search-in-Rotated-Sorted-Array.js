// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/
/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums || !nums.length) {
    return -1;
  }
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    if (nums[l] <= nums[r]) {
      let mid = l + ((r - l) / 2) | 0;
      if (target === nums[mid]) {
        return mid;
      } else if (target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      let mid = l + ((r - l) / 2) | 0;
      if (target === nums[mid]) {
        return mid;
      }
      //
      else if (target < nums[mid]) {
        if (nums[mid] >= nums[l]) {
          if (target > nums[r]) {
            r = mid - 1;
          } else {
            l = mid + 1;
          }
        } else {
          r = mid - 1;
        }
      } else {
        if (nums[mid] >= nums[l]) {
          l = mid + 1;
        } else {
          if (target > nums[r]) {
            r = mid - 1;
          } else {
            l = mid + 1;
          }
        }
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 10));
/*
Runtime: 76 ms, faster than 24.77% of JavaScript online submissions for Search in Rotated Sorted Array.
Memory Usage: 14.9 MB, less than 14.40% of JavaScript online submissions for Search in Rotated Sorted Array.
 */