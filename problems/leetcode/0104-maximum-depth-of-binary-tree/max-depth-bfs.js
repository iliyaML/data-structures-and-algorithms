/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time Complexity: O(n), n = all nodes in the tree
 * Space Complexity: O(n)
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  let depth = 0;
  // base case, return zero if tree is empty
  if (root === null) {
    return depth;
  }

  // at this point root is not empty
  // initialize our queue and add root to it
  const queue = [root];

  // process the queue until it is empty
  while (queue.length > 0) {
    // process all the nodes on this level
    let l = queue.length;
    while (l--) {
      const node = queue.shift();

      // simple check to ensure node is not null
      // add it's left and right children
      if (node !== null) {
        if (node.left !== null) {
          queue.push(node.left);
        }

        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }

    // increment the depth once you're done with this level
    ++depth;
  }

  return depth;
};
