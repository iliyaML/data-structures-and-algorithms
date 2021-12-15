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

// Use a Stack
// Time Complexity: O(n), n the number of nodes in the tree
// Space Complexity: O(n)
function dfs(root, target) {
  const stack = [root];
  while (stack.length !== 0) {
    let curNode = stack.pop();

    // Pre Order Traversal
    if (curNode.val === target) {
      return true;
    }

    // Add the children to the stack
    if (curNode.left !== null) {
      stack.push(curNode.left);
    }
    if (curNode.right !== null) {
      stack.push(curNode.right);
    }
  }
  return false;
}

console.log(dfs(a, "f")); // true
console.log(dfs(a, "z")); // false
