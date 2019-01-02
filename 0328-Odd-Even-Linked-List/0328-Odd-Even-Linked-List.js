// 328. Odd Even Linked List
// https://leetcode.com/problems/odd-even-linked-list/
/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:
Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

Example 2:
Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL

Note:
The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
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
var oddEvenList = function (head) {
  let oddDummyHead = new ListNode(-1);
  let evenDummyHead = new ListNode(-1);
  let oddTail = oddDummyHead;
  let evenTail = evenDummyHead;
  let i = 1;
  while (head) {
    let node = head;
    head = head.next;
    node.next = null;
    if (i++ % 2) {
      oddTail.next = node;
      oddTail = oddTail.next;
    } else {
      evenTail.next = node;
      evenTail = evenTail.next;
    }
  }
  oddTail.next = evenDummyHead.next;
  return oddDummyHead.next;
};
// Runtime: 68 ms, faster than 52.94% of JavaScript online submissions for Odd Even Linked List.