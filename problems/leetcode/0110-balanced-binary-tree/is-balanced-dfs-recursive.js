/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time Complexity: O()
 * Space Complexity: O()
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = (root) => {
  // return the first value from dfs
  return _dfs(root)[0];
};

const _dfs = (node) => {
  // base case, if tree is empty return true (ie. balanced) and depth = 0
  if (node === null) {
    return [true, 0];
  }

  const left = _dfs(node.left);
  const right = _dfs(node.right);

  // ensure left and right subtrees are balanced
  // and the difference in height is not more than 1
  const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

  // return balanced, include level of current node and
  // max between left and right subtrees
  return [balanced, 1 + Math.max(left[1], right[1])];
};
