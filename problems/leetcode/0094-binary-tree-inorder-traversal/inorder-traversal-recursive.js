/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Traverse through all the nodes recursively (position of action is important)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root, result = []) => {
  if (root === null) {
    return [];
  }

  if (root.left !== null) {
    inorderTraversal(root.left, result);
  }

  // in order traversal happens in between left and right
  result.push(root.val);

  if (root.right !== null) {
    inorderTraversal(root.right, result);
  }

  return result;
};
