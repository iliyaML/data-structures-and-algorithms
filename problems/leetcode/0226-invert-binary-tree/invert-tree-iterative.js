/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Level Order Traversal, similar to BFS (Use a Queue)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  if (root === null) {
    return null;
  }

  const queue = [root];

  while (queue.length > 0) {
    let curNode = queue.shift();
    let l_tree = curNode.left;

    // swap the left and right
    curNode.left = curNode.right;
    curNode.right = l_tree;

    if (curNode.left !== null) {
      queue.push(curNode.left);
    }
    if (curNode.right !== null) {
      queue.push(curNode.right);
    }
  }

  return root;
};
