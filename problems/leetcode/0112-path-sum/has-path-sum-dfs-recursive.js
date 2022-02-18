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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
  return _dfs(root, targetSum, 0);
};

const _dfs = (root, targetSum, sum = 0) => {
  // base case: if root is null immediately return false
  if (root === null) {
    return false;
  }

  // pre-order traversal
  sum += root.val;

  // if both left and right children are null, we have arrived at a leaf node
  // check to see if our running sum is equal to the target sum
  if (root.left === null && root.right === null) {
    if (sum === targetSum) {
      return true;
    }
  }

  // call this recursively on the left and right subtrees
  // pass in sum which is our running sum
  return _dfs(root.left, targetSum, sum) || _dfs(root.right, targetSum, sum);
};
