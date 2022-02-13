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
 * Space Complexity: O(1)
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = (root) => {
  const results = [];

  // sanity check, ensures root is valid (just good practice)
  if (root === null) {
    return results;
  }

  // typical breadth-first search approach
  const queue = [root];
  while (queue.length > 0) {
    let sum = 0;
    let totalNodesAtThisLevel = queue.length;

    // process all the nodes at this level
    for (let i = 0; i < totalNodesAtThisLevel; ++i) {
      const node = queue.shift();

      if (node !== null) {
        sum += node.val;

        // push children nodes to the queue
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }

    // include average of this level in the results array
    results.push(sum / totalNodesAtThisLevel);
  }

  return results;
};
