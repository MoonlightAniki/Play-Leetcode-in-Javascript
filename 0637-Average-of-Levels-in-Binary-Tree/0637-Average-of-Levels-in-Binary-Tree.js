// 637. Average of Levels in Binary Tree
// https://leetcode.com/problems/average-of-levels-in-binary-tree/
/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const res = [];
  if (!root) {
    return res;
  }
  const nodes = [];
  let queue = [];
  queue.push({level: 0, node: root});
  while (queue.length > 0) {
    front = queue[0];
    queue = queue.slice(1);

    if (front.level === nodes.length) {
      nodes.push([]);
    }
    nodes[nodes.length - 1].push(front.node.val);

    if (front.node.left) {
      queue.push({level: front.level + 1, node: front.node.left});
    }
    if (front.node.right) {
      queue.push({level: front.level + 1, node: front.node.right});
    }
  }

  for (let levelNodes of nodes) {
    let sum = 0;
    for (let val of levelNodes) {
      sum += val;
    }
    res.push(sum / levelNodes.length);
  }
  return res;
};
// Runtime: 108 ms, faster than 9.29% of JavaScript online submissions for Average of Levels in Binary Tree.