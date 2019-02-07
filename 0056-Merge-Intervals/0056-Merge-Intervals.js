// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/
/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */


// Definition for an interval.
function Interval(start, end) {
  this.start = start;
  this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
  if (!intervals || intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => a.start === b.start ? a.end - b.end : a.start - b.start);

  const res = [];
  let interval = intervals[0];
  let start = interval.start;
  let end = interval.end;
  for (let i = 1; i < intervals.length; ++i) {
    interval = intervals[i];
    if (interval.start > end) {
      res.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    } else {
      end = Math.max(end, interval.end);
    }
  }
  res.push(new Interval(start, end));
  return res;
};

const intervals = [];
intervals.push(new Interval(1, 4));
intervals.push(new Interval(2, 3));
console.log(merge(intervals));
/*
Runtime: 92 ms, faster than 38.80% of JavaScript online submissions for Merge Intervals.
Memory Usage: 18 MB, less than 31.15% of JavaScript online submissions for Merge Intervals.
 */
