class BinaryTreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new BinaryTreeNode("a");
const b = new BinaryTreeNode("b");
const c = new BinaryTreeNode("c");
const d = new BinaryTreeNode("d");
const e = new BinaryTreeNode("e");
const f = new BinaryTreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Level Order Traversal (Use a Queue)
// Time Complexity: O(n), n the number of nodes in the tree
// Space Complexity: O(n)
function bfs(root, target) {
  const queue = [root];
  while (queue.length !== 0) {
    let curNode = queue.shift();

    if (curNode.val === target) {
      return true;
    }

    // Add the children to the queue
    if (curNode.left !== null) {
      queue.push(curNode.left);
    }
    if (curNode.right !== null) {
      queue.push(curNode.right);
    }
  }
  return false;
}

console.log(bfs(a, "f")); // true
console.log(bfs(a, "z")); // true
