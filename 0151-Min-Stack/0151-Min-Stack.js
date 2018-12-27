// 155. Min Stack
// https://leetcode.com/problems/min-stack/
/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

Example:
  MinStack minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.getMin();   --> Returns -3.
  minStack.pop();
  minStack.top();      --> Returns 0.
  minStack.getMin();   --> Returns -2.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.data.length) {
    let min = this.data[this.data.length - 1].min;
    if (x < min) {
      this.data.push({val: x, min: x});
    } else {
      this.data.push({val: x, min: min});
    }
  } else {
    this.data.push({val: x, min: x});
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.data.length) {
    this.data.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.data.length) {
    return this.data[this.data.length - 1].val;
  } else {
    return -1;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.data.length) {
    return this.data[this.data.length - 1].min;
  } else {
    return -1;
  }
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(-3);
minStack.push(0);

// Runtime: 104 ms, faster than 63.90% of JavaScript online submissions for Min Stack.