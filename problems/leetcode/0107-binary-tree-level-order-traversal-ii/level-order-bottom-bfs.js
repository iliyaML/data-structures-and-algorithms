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
const levelOrderBottom = (root) => {
  // assume this is a linked list where we can
  // easily add items to the front of the list
  let resultsLinkedList = [];
  // simple case: if the root is null, we immediately return
  // the empty list
  if (root === null) {
    return resultsLinkedList;
  }

  // typical breadth-first search approach
  const queue = [root];
  while (queue.length > 0) {
    // process all the nodes at this level
    let nodesAtThisLevel = queue.length;
    // nodes array to store our results
    let nodes = [];
    for (let i = 0; i < nodesAtThisLevel; ++i) {
      const node = queue.shift();
      // ensure node is not null
      if (node !== null) {
        // add the node to our nodes array
        nodes.push(node.val);
        // add children nodes to the queue
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }

    // once we've gotten all the nodes in our array
    // we add it to our list (add it to the front)
    resultsLinkedList.unshift(nodes);
  }

  return resultsLinkedList;
};
