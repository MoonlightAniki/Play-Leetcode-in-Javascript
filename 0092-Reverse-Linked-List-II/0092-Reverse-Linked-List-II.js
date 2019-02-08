// 92. Reverse Linked List II
// https://leetcode.com/problems/reverse-linked-list-ii/
/*
Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let dummy = new ListNode();
  let count = 0;
  let prev = dummy;
  while (head) {
    let node = head;
    head = node.next;
    node.next = null;
    ++count;
    if (count >= m && count <= n) {
      node.next = prev.next;
      prev.next = node;
      if (count === n) {
        while (prev.next) {
          prev = prev.next;
        }
      }
    } else {
      prev.next = node;
      prev = node;
    }
  }
  return dummy.next;
};
/*
Runtime: 72 ms, faster than 29.77% of JavaScript online submissions for Reverse Linked List II.
Memory Usage: 14.7 MB, less than 17.46% of JavaScript online submissions for Reverse Linked List II.
 */