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
 * @return {TreeNode}
 */
const invertTree = (root) => {
  // if the tree is empty, return null
  if (root === null) {
    return null;
  }

  // for a swap, store one of the subtrees
  let l_tree = root.left;

  // swap the left and right
  root.left = root.right;
  root.right = l_tree;

  // do them recursively for left and right subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
};
