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
const rightSideView = (root) => {
  // array to keep the results
  let results = [];

  // base case: if the tree is empty, immediately return empty results
  if (root === null) {
    return results;
  }

  // typical breadth-first search approach
  const queue = [root];
  while (queue.length > 0) {
    // initialize this variable to null
    let nodesAtThisLevel = queue.length;
    let rightMostNode = null;

    // process all the nodes at this level
    for (let i = 0; i < nodesAtThisLevel; ++i) {
      let node = queue.shift();

      // add the children of each node
      if (node !== null) {
        // assign node to rightMostNode
        rightMostNode = node;

        // order is important
        // we add left node to the queue first followed by the right node
        // this helps to make sure that the node at the end of the queue
        // for this level is the right most node
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }

    // once we end the loop, rightMostNode would eventually be assigned
    // to the right most node of the tree
    // then we add the node's value to the results
    results.push(rightMostNode.val);
  }

  return results;
};
