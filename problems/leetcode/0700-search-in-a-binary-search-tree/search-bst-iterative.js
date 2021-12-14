/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Level Order Traversal (Use a Queue)
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
  // if tree is empty, return null
  if (root === null) {
    return null;
  }
  const queue = [root];

  while (queue.length > 0) {
    let curNode = queue.shift();

    if (curNode.val === val) {
      return curNode;
    } else if (curNode.val > val) {
      if (curNode.left !== null) {
        queue.push(curNode.left);
      }
    } else {
      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }
  }

  return null;
};
