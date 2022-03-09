/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  let results = [];
  // simple case: if root is empty, return empty results
  if (root === null) {
    return results;
  }

  // typical breadth-first search approach
  const queue = [root];
  while (queue.length > 0) {
    // process all the nodes at this level
    let nodesAtThisLevel = queue.length;
    let nodes = [];
    for (let i = 0; i < nodesAtThisLevel; ++i) {
      const node = queue.shift();
      // ensure the node is not null
      if (node !== null) {
        // push the node to our nodes list
        nodes.push(node.val);
        // check to see if it has any children
        if (node.children) {
          // if it has, add all its children to the end of our queue
          for (let x = 0, l = node.children.length; x < l; ++x) {
            queue.push(node.children[x]);
          }
        }
      }
    }
    // add all the nodes at this level to our results
    results.push(nodes);
  }
  return results;
};
