/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Depth First Search
 * Time Complexity: O(n)
 * Space Complexity: O(n), recursive call stack
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  // empty tree
  if (p === null && q === null) {
    return true;
  }

  // return false if one of them is empty or their values are not the same
  if (p === null || q === null || p.val !== q.val) {
    return false;
  }

  // continue to traverse the tree
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
