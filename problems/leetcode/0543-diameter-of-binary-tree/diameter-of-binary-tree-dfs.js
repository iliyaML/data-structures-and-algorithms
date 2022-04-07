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
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
  let results = 0;

  const _dfs = (root) => {
    if (root === null) {
      return -1;
    }

    let left = _dfs(root.left, results);
    let right = _dfs(root.right, results);

    results = Math.max(results, 2 + left + right);

    return 1 + Math.max(left, right);
  };
  _dfs(root);

  return results;
};
