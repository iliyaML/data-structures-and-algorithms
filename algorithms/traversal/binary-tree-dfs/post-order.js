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

function postOrderRecursive(root, result = []) {
  if (root === null) {
    return [];
  }

  if (root.left !== null) {
    postOrderRecursive(root.left, result);
  }

  if (root.right !== null) {
    postOrderRecursive(root.right, result);
  }

  // post-order
  result.push(root.val);

  return result;
}

console.log(postOrderRecursive(a));
