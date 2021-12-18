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

// Relying on the call stack
// Time Complexity: O(n), n the number of nodes in the tree
// Space Complexity: O(n)
function dfs(root, target) {
  if (root === null) {
    return;
  }

  if (root.val === target) {
    return true;
  }

  // dfs the left subtree
  if (dfs(root.left, target) === true) {
    return true;
  }

  // dfs the right subtree
  if (dfs(root.right, target) === true) {
    return true;
  }

  // if we end up here, then the target does not exist in the tree
  return false;
}

console.log(dfs(a, "f")); // true
console.log(dfs(a, "z")); // false
