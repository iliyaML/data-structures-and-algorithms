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
 * @return {number[]}
 */
const largestValues = (root) => {
  let results = [];
  // base case: if root is null, immediately return results
  if (root === null) {
    return results;
  }

  // typical breadth-first search approach
  const queue = [root];

  while (queue.length > 0) {
    // loop through all the nodes at this level
    let numberOfNodesAtThisLevel = queue.length;

    // assume the max is infinity (at first)
    let maxNum = -Infinity;
    for (let i = 0; i < numberOfNodesAtThisLevel; ++i) {
      const node = queue.shift();
      // ensure we don't add/process any null nodes
      if (node !== null) {
        // update max if this particular node is greater than
        // our current max
        maxNum = Math.max(maxNum, node.val);

        // add the children nodes to the end of the queue
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }

    // add the maximum of this level to results
    results.push(maxNum);
  }

  return results;
};
