// 34. Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums || !nums.length) {
    return [-1, -1];
  }
  let index = binarySearch(nums, target);
  if (index === -1) {
    return [-1, -1];
  } else {
    return [firstIndex(nums, index), lastIndex(nums, index)];
  }
};


function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = l + ((r - l) / 2) | 0;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

function lastIndex(nums, index) {
  for (let i = index; i + 1 < nums.length; ++i) {
    if (nums[i + 1] !== nums[index]) {
      return i;
    }
  }
  return nums.length - 1;
}

function firstIndex(nums, index) {
  for (let i = index; i - 1 >= 0; --i) {
    if (nums[i - 1] !== nums[index]) {
      return i;
    }
  }
  return 0;
}

/*
Runtime: 76 ms, faster than 21.74% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
Memory Usage: 16.5 MB, less than 27.14% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
 */