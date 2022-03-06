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
 * @return {number[][]}
 */
const levelOrder = (root) => {
  let results = [];
  // base case: if root is empty, immediately return results
  if (root === null) {
    return results;
  }

  // typical breadth-first search approach
  const queue = [root];
  while (queue.length > 0) {
    // loop through all the nodes at this level
    let numberOfNodesAtThisLevel = queue.length;

    // array to store the nodes at this level
    let nodes = [];
    for (let i = 0; i < numberOfNodesAtThisLevel; ++i) {
      const node = queue.shift();
      // ensure we don't add any null nodes
      if (node !== null) {
        // push this node to the nodes array
        nodes.push(node.val);
        // add the children nodes to the end of the queue
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }

    // once we're done with a particular level, we add the
    // nodes array to our results
    results.push(nodes);
  }

  return results;
};
