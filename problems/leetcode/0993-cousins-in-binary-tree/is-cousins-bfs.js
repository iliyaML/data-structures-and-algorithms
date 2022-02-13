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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y) => {
  // good practice to ensure root is not null
  if (root === null) {
    return false;
  }

  // typical breadth-first search approach

  // use queue to store pair (currentNode and parentNode)
  let queue = [[root, null]];
  while (queue.length > 0) {
    // while on a particular level
    // assume all these are null / not found yet
    let foundX = null;
    let parentX = null;
    let foundY = null;
    let parentY = null;

    // process through all the nodes at this level
    let totalNodesAtThisLevel = queue.length;

    for (let i = 0; i < totalNodesAtThisLevel; ++i) {
      // get the current node and parent node
      let [node, parentNode] = queue.shift();
      if (node !== null) {
        // if we found x, we store the values of x node and parent node
        if (node.val === x) {
          foundX = node;
          parentX = parentNode;
        }

        // similarly for y
        if (node.val === y) {
          foundY = node;
          parentY = parentNode;
        }

        // add children nodes to the queue
        if (node.left !== null) {
          queue.push([node.left, node]);
        }
        if (node.right !== null) {
          queue.push([node.right, node]);
        }
      }
    }

    // criteria to determine they are cousins
    if (foundX && foundY && parentX.val !== parentY.val) {
      return true;
    }

    // if we found one of them but not the other, we immediately return false
    // as they are definitely not cousins
    if (foundX || foundY) {
      return false;
    }
  }

  return false;
};
