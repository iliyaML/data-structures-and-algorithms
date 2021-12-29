/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root) => {
  // if the tree is empty, the depth is zero
  if (root === null) {
    return 0;
  }

  // if le
  if (root.left === null && root.right === null) {
    return 1;
  }

  // current node has only right subtree
  if (root.left === null) {
    return 1 + minDepth(root.right);
  }

  // current node has only left subtree
  if (root.right === null) {
    return 1 + minDepth(root.left);
  }

  // if none of the above cases, then recur on both left and right subtrees
  return 1 + Math.min(minDepth(root.right), minDepth(root.left));
};
