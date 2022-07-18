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
 * @return {boolean}
 */
const isValidBST = (root, minVal = -Infinity, maxVal = Infinity) => {
  // base case
  if (root === null) {
    return true;
  }

  if (root.val >= maxVal || root.val <= minVal) {
    return false;
  }

  return (
    isValidBST(root.left, minVal, root.val) &&
    isValidBST(root.right, root.val, maxVal)
  );
};
