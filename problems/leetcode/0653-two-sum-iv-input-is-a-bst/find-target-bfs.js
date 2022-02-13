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
 * Space Complexity: O(n), potentially may have to add all the tree nodes to the set
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = (root, k) => {
  // sanity check, ensures root is valid (just good practice)
  if (root === null) {
    return false;
  }

  // set to store the tree nodes values
  let mySet = new Set();

  // typical breadth-first search approach
  let queue = [root];

  while (queue.length > 0) {
    // loop through all the nodes at this level
    let totalNodesAtThisLevel = queue.length;
    for (let i = 0; i < totalNodesAtThisLevel; ++i) {
      let node = queue.shift();

      if (node !== null) {
        // calculate the difference
        let difference = k - node.val;

        if (mySet.has(difference)) {
          // if the difference exists
          // there is a valid pair that sums to k
          return true;
        } else {
          // if not, we add the value to our set
          mySet.add(node.val);
        }

        // add the children nodes
        if (node.left !== null) {
          queue.push(node.left);
        }

        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
  }

  return false;
};
