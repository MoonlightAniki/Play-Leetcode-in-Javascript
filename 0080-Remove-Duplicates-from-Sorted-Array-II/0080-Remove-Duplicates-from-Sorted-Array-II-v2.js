// 80. Remove Duplicates from Sorted Array II
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
/*
Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Given nums = [1,1,1,2,2,3],
Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It doesn't matter what you leave beyond the returned length.

Example 2:
Given nums = [0,0,1,1,1,1,2,3,3],
Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.
It doesn't matter what values are set beyond the returned length.

Clarification:
Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
Internally you can think of this:
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);
// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    let k = nextIndex(nums, j);
    let len = Math.min(k - j, 2);
    for (let ii = 0; ii < len; ++ii) {
      nums[i + ii] = nums[j];
    }
    i += len;
    j = k;
  }
  return i;
};

function nextIndex(nums, index) {
  for (let i = index + 1; i < nums.length; ++i) {
    if (nums[i] !== nums[index]) {
      return i;
    }
  }
  return nums.length;
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
/*
Runtime: 92 ms, faster than 17.36% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
Memory Usage: 17 MB, less than 5.21% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
 */