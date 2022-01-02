/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root, result = []) => {
  if (root === null) {
    return [];
  }

  result.push(root.val);

  if (root.left !== null) {
    preorderTraversal(root.left, result);
  }

  if (root.right !== null) {
    preorderTraversal(root.right, result);
  }

  return result;
};
