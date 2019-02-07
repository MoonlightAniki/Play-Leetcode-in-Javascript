// 86. Partition List
// https://leetcode.com/problems/partition-list/
/*
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.

Example:
Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head || !head.next) {
    return head;
  }
  let leftDummy = new ListNode();
  let rightDummy = new ListNode();
  let leftPrev = leftDummy;
  let rightPrev = rightDummy;
  while (head) {
    let node = head;
    head = node.next;
    node.next = null;
    if (node.val < x) {
      leftPrev.next = node;
      leftPrev = leftPrev.next;
    } else {
      rightPrev.next = node;
      rightPrev = rightPrev.next;
    }
  }
  leftPrev.next = rightDummy.next;
  return leftDummy.next;
};
/*
Runtime: 80 ms, faster than 20.99% of JavaScript online submissions for Partition List.
Memory Usage: 15.3 MB, less than 38.18% of JavaScript online submissions for Partition List.
 */