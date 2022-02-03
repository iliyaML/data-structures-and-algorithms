/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** Time Complexity: O(n), n = all nodes in the tree
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
  // also add the level associated with it
  const stack = [[root, 1]];

  // process the stack until it is empty
  while (stack.length > 0) {
    // get node and level
    const [node, level] = stack.pop();

    // push left and right children into the stack
    if (node !== null) {
      if (node.left !== null) {
        stack.push([node.left, level + 1]);
      }
      if (node.right !== null) {
        stack.push([node.right, level + 1]);
      }
    }

    // update depth if level is greater than current depth
    depth = Math.max(depth, level);
  }

  return depth;
};
