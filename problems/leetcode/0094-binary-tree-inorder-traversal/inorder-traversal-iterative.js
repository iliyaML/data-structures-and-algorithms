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
const inorderTraversal = (root) => {
  let results = [];
  if (root === null) {
    return results;
  }

  let curNode = root;
  const stack = [];
  while (stack.length > 0 || curNode !== null) {
    while (curNode !== null) {
      stack.push(curNode);
      curNode = curNode.left;
    }
    curNode = stack.pop();
    results.push(curNode.val);
    curNode = curNode.right;
  }

  return results;
};
