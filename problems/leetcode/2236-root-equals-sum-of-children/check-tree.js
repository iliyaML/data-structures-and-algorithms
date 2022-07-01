/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * @param {TreeNode} root
 * @return {boolean}
 */
const checkTree = (root) => root.val === root.left.val + root.right.val;
