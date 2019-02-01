// 24. Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/
/*
Given a linked list, swap every two adjacent nodes and return its head.

Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.

Note:
Your algorithm should use only constant extra space.
You may not modify the values in the list's nodes, only nodes itself may be changed.
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
var swapPairs = function(head) {
  const dummyHead = new ListNode(-1);
  let prev = dummyHead;
  let index = 0;
  while (head) {
    const node = head;
    head = node.next;
    node.next = null;

    if (index % 2 === 0) {
      prev.next = node;
    } else {
      node.next = prev.next;
      prev.next = node;
      prev=prev.next.next;
    }
    ++index;
  }
  return dummyHead.next;
};
// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Swap Nodes in Pairs.