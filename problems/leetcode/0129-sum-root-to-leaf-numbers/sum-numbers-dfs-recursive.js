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
const sumNumbers = (root) => {
  // call our recursive function
  return _dfs(root, 0);
};

const _dfs = (node, sum = 0) => {
  // base case: if tree is empty, return 0
  if (node === null) {
    return 0;
  }

  // calculate the number at this node
  sum = sum * 10 + node.val;

  // if we reach a leaf node
  // return the sum of this path
  if (node.left === null && node.right === null) {
    return sum;
  }

  // call this function recursively for the left and right subtrees
  return _dfs(node.left, sum) + _dfs(node.right, sum);
};
