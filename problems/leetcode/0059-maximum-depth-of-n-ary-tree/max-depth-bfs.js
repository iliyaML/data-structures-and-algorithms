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
 * @return {number}
 */
const maxDepth = (root) => {
  let depth = 0;
  // if root is empty, return depth of zero
  if (root === null) {
    return depth;
  }

  // typical breadth-first search approach
  const queue = [root];

  while (queue.length > 0) {
    // process all the nodes at this level
    let totalNodesAtThisLevel = queue.length;
    for (let i = 0; i < totalNodesAtThisLevel; ++i) {
      const node = queue.shift();

      if (node !== null) {
        // add all the children nodes
        for (
          let x = 0, childrenLength = node.children.length;
          x < childrenLength;
          ++x
        ) {
          if (node.children[x] !== null) {
            queue.push(node.children[x]);
          }
        }
      }
    }

    // increment the depth
    ++depth;
  }

  return depth;
};
