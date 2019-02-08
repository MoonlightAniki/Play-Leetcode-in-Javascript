// 148. Sort List
// https://leetcode.com/problems/sort-list/
/*
Sort a linked list in O(n log n) time using constant space complexity.

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
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let right = slow.next;
  slow.next = null;
  let left = head;

  left = sortList(left);
  right = sortList(right);
  return merge(left, right);
};


function merge(p, q) {
  let dummy = new ListNode();
  let prev = dummy;
  while (p && q) {
    let node;
    if (p.val < q.val) {
      node = p;
      p = node.next;
      node.next = null;
    } else {
      node = q;
      q = node.next;
      node.next = null;
    }
    prev.next = node;
    prev = node;
  }
  if (p) {
    prev.next = p;
  }
  if (q) {
    prev.next = q;
  }
  return dummy.next;
}

/*
Runtime: 120 ms, faster than 37.33% of JavaScript online submissions for Sort List.
Memory Usage: 22.6 MB, less than 31.15% of JavaScript online submissions for Sort List.
 */