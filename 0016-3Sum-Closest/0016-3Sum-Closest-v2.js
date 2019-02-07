// 16. 3Sum Closest
// https://leetcode.com/problems/3sum-closest/
/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:
Given array nums = [-1, 2, 1, -4], and target = 1.
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = nums[0] + nums[1] + nums[2];
  let diff = Math.abs(res - target);
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    //问题转化成在nums[i+1, n-1]范围内找两个元素，使这两个元素的和最接近target-nums[i]
    let l = i + 1;
    let r = n - 1;
    let t = target - nums[i];
    while (l < r) {
      let sum = nums[l] + nums[r];
      if (sum === t) {
        return target;
      }
      if (Math.abs(sum - t) < diff) {
        res = sum + nums[i];
        diff = Math.abs(res - target);
      }
      if (sum < t) {
        ++l
      } else {
        --r;
      }
    }
  }
  return res;
};
console.log(threeSumClosest([-1, 2, 1, -4], 1));
/*
Runtime: 132 ms, faster than 17.69% of JavaScript online submissions for 3Sum Closest.
Memory Usage: 15.8 MB, less than 15.69% of JavaScript online submissions for 3Sum Closest.
 */