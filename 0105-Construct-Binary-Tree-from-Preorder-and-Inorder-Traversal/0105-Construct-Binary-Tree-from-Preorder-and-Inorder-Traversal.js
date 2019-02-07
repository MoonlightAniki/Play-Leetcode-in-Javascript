// 105. Construct Binary Tree from Preorder and Inorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:
    3
   / \
  9  20
    /  \
   15   7
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return __buildTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

function __buildTree(preorder, preL, preR, inorder, inL, inR) {
  if (preL > preR) {
    return null;
  }
  if (preL === preR) {
    return new TreeNode(preorder[preL]);
  }
  let val = preorder[preL];
  let i = inL;
  for (; i <= inR; ++i) {
    if (inorder[i] === val) {
      break;
    }
  }
  let leftCount = i - inL;
  let root = new TreeNode(val);
  root.left = __buildTree(preorder, preL + 1, preL + leftCount, inorder, inL, i - 1);
  root.right = __buildTree(preorder, preL + leftCount + 1, preR, inorder, i + 1, inR);
  return root;
}

/*
Runtime: 92 ms, faster than 69.58% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
Memory Usage: 17.5 MB, less than 52.31% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
 */