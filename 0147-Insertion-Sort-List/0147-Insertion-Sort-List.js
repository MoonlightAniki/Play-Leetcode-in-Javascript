// 147. Insertion Sort List
// https://leetcode.com/problems/insertion-sort-list/
/*
Sort a linked list using insertion sort
A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list

Algorithm of Insertion Sort:
Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list,
and inserts it there.
It repeats until no input elements remain.

Example 1:
Input: 4->2->1->3
Output: 1->2->3->4

Example 2:
Input: -1->5->3->4->0
Output: -1->0->3->4->5
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let dummy = new ListNode();
  dummy.next = head;
  let tail = head;//插入排序前面已经排好序的链表的尾节点
  for (let cur = head.next; cur;) {
    if (cur.val < tail.val) {
      let node = cur;
      cur=cur.next;
      tail.next = node.next;
      node.next = null;

      let prev = dummy;
      for (; prev !== tail && prev.next.val < node.val; prev = prev.next);
      node.next = prev.next;
      prev.next = node;
    } else {
      cur=cur.next;
      tail=tail.next;
    }
  }
  return dummy.next;
};
/*
Runtime: 96 ms, faster than 83.04% of JavaScript online submissions for Insertion Sort List.
Memory Usage: 17.5 MB, less than 52.63% of JavaScript online submissions for Insertion Sort List.
 */