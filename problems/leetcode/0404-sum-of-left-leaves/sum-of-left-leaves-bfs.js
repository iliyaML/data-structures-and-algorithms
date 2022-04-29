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
const sumOfLeftLeaves = (root) => {
  // base case, if root is empty return 0
  if (root === null) {
    return 0;
  }

  // if root is not empty, but has no children, return 0
  if (root.left === null && root.right === null) {
    return 0;
  }

  // root is valid and has children
  let sum = 0;

  // typical bfs approach

  // each item in the node contains the node and whether it was a left or right child
  const queue = [[root, "root"]];
  while (queue.length > 0) {
    let nodesAtThisLevel = queue.length;

    // process all the nodes at this level
    for (let i = 0; i < nodesAtThisLevel; ++i) {
      let [node, status] = queue.shift();

      if (node !== null) {
        // add the children nodes
        if (node.left !== null) {
          queue.push([node.left, "left"]);
        }
        if (node.right !== null) {
          queue.push([node.right, "right"]);
        }

        // if node is of left node and is a leaf
        // add its value to the sum
        if (status === "left" && node.left === null && node.right === null) {
          sum += node.val;
        }
      }
    }
  }

  return sum;
};
