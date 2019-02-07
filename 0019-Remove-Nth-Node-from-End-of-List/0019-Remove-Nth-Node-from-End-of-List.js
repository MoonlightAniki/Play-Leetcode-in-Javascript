// 19. Remove Nth Node from End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:
Given n will always be valid.

Follow up:
Could you do this in one pass?
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let p = dummy;
  for (let i = 0; i < n; ++i) {
    p = p.next;
  }
  let prev = dummy;
  while (p.next) {
    prev = prev.next;
    p = p.next;
  }
  prev.next = prev.next.next;
  return dummy.next;
};
/*
Runtime: 80 ms, faster than 19.62% of JavaScript online submissions for Remove Nth Node From End of List.
Memory Usage: 15.1 MB, less than 22.34% of JavaScript online submissions for Remove Nth Node From End of List.
 */