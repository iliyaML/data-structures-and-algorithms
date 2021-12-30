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

//      a
//     / \
//    b   c
//   / \   \
//  d   e   f

function preOrderRecursive(root, result = []) {
  if (root === null) {
    return [];
  }

  // pre-order
  result.push(root.val);

  if (root.left !== null) {
    preOrderRecursive(root.left, result);
  }

  if (root.right !== null) {
    preOrderRecursive(root.right, result);
  }

  return result;
}

console.log(preOrderRecursive(a));
