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
  if (!nums) {
    return 0;
  }
  let res = 0;// nums[0...res)范围内元素按顺序排列，且重复元素不超过2个
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === nums[res - 1]) {
      if (count < 2) {
        nums[res++] = nums[i];
        ++count;
      }
    } else {
      nums[res++] = nums[i];
      count = 1;
    }
  }
  return res;
};

let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
console.log(nums);

nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
console.log(nums);

nums = [1, 2, 2];
console.log(removeDuplicates(nums));
console.log(nums);
/*
Runtime: 60 ms, faster than 95.83% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
Memory Usage: 36.2 MB, less than 50.55% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
 */