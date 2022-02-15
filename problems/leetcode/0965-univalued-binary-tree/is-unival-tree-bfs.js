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
 * @return {boolean}
 */
const isUnivalTree = (root) => {
  // verify root is valid
  if (root === null) {
    return false;
  }

  // at this point, root is not null
  // save the value of root
  const val = root.val;

  // typical breadth-first search approach
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node !== null) {
      // verify the value
      // if they are not equal to root value, then it's
      // not a univalued binary tree
      if (node.val !== val) {
        return false;
      }

      // add children nodes to the queue
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  // if we've processed all the nodes and reached this point
  // it is a univalued binary tree
  return true;
};
