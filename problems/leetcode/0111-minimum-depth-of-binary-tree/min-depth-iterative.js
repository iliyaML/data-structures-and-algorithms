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
 * The first level encountered with a leaf would be the
 * where the minimum depth is
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root) => {
  // if the tree is empty, the depth is zero
  if (root === null) {
    return 0;
  }

  const queue = [root]; // add root to queue
  let depth = 0;

  // process the queue until it is empty
  while (queue.length > 0) {
    let size = queue.length; // capture the current

    // process the current level
    while (size > 0) {
      const curNode = queue.shift();

      if (curNode.right === null && curNode.left === null) {
        // if the node is a leaf (has no children)
        return depth + 1;
      }

      // add the children to the queue
      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
      if (curNode.left !== null) {
        queue.push(curNode.left);
      }

      --size; // decrease the size once a node in a level has been processed
    }

    ++depth; // increase the depth after each level
  }
};
