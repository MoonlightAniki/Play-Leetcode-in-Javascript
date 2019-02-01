// 11. Container with Most Water
// https://leetcode.com/problems/container-with-most-water/
/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are
drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a
container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section)
the container can contain is 49.

Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
 */


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0;
  let [l, r] = [0, height.length - 1];
  while (l < r) {
    res = Math.max(res, (r - l) * Math.min(height[l], height[r]));

    if (height[l] < height[r]) {
      const h = height[l];
      for (l = l + 1; l < r; ++l) {
        if (height[l] > h) {
          break;
        }
      }
    } else {
      const h = height[r];
      for (r = r - 1; r > l; --r) {
        if (height[r] > h) {
          break;
        }
      }
    }
  }
  return res;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 2, 4, 3]));
// Runtime: 88 ms, faster than 40.93% of JavaScript online submissions for Container With Most Water.