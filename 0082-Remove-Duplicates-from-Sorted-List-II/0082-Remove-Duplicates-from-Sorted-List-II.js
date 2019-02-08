// 82. Remove Duplicates from Sorted List II
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
/*
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:
Input: 1->2->3->3->4->4->5
Output: 1->2->5

Example 2:
Input: 1->1->1->2->3
Output: 2->3
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
var deleteDuplicates = function (head) {
  let dummy = new ListNode();
  let prev = dummy;
  while (head) {
    let node = head;
    head = head.next;
    node.next = null;

    if (!head) {
      prev.next = node;
    } else {
      if (node.val !== head.val) {
        prev.next = node;
        prev = prev.next;
      } else {
        while (head && head.val === node.val) {
          head = head.next;
        }
      }
    }
  }
  return dummy.next;
};
/*
Runtime: 84 ms, faster than 30.51% of JavaScript online submissions for Remove Duplicates from Sorted List II.
Memory Usage: 16.8 MB, less than 11.11% of JavaScript online submissions for Remove Duplicates from Sorted List II.
 */