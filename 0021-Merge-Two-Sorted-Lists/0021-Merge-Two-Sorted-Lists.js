// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  let dummyHead = new ListNode(-1);
  let prev = dummyHead;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      let node = l1;
      l1 = l1.next;
      node.next = null;

      prev.next = node;
      prev = prev.next;
    } else {
      let node = l2;
      l2 = l2.next;
      node.next = null;

      prev.next = node;
      prev = prev.next;
    }
  }
  if (l1) {
    prev.next = l1;
  }
  if (l2) {
    prev.next = l2;
  }
  return dummyHead.next;
};
// Runtime: 64 ms, faster than 91.58% of JavaScript online submissions for Merge Two Sorted Lists.