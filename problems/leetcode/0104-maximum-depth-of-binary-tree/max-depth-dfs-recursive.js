/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time Complexity: O(n), n = all nodes in the tree
 * Space Complexity: O(n), worst case is the tree is a linked list
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  // base case, return zero if tree is empty
  if (root === null) {
    return 0;
  }

  // at this point, root is not null, so we can access the left and right subtrees
  // 1 to incorporate the current node
  // get the max between the left and right subtrees
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
