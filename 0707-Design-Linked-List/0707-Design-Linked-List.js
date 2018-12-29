// 707. Design Linked List
// https://leetcode.com/problems/design-linked-list/
/*
Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next
is a pointer/reference to the next node. If you want to use the doubly linked list, you will need one more attribute
prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement these functions in your linked list class:
  get(index) : Get the value of the index-th node in the linked list. If the index is invalid, return -1.
  addAtHead(val) : Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
  addAtTail(val) : Append a node of value val to the last element of the linked list.
  addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
  deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.

Example:
MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
linkedList.get(1);            // returns 2
linkedList.deleteAtIndex(1);  // now the linked list is 1->3
linkedList.get(1);            // returns 3

Note:
All values will be in the range of [1, 1000].
The number of operations will be in the range of [1, 1000].
Please do not use the built-in LinkedList library.
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.dummyHead = new ListNode(-1);
  this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let prev = this.dummyHead;
  for (let i = 0; i < index; ++i) {
    prev = prev.next;
  }
  return prev.next.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.size, val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list,
 * the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) {
    return;
  }
  let prev = this.dummyHead;
  for (let i = 0; i < index; ++i) {
    prev = prev.next;
  }
  let node = new ListNode(val);
  node.next = prev.next;
  prev.next = node;
  ++this.size;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  let prev = this.dummyHead;
  for (let i = 0; i < index; ++i) {
    prev = prev.next;
  }
  let delNode = prev.next;
  prev.next = delNode.next;
  delNode.next = null;
  --this.size;
};

// Runtime: 184 ms, faster than 18.44% of JavaScript online submissions for Design Linked List.