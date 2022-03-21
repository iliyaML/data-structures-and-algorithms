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

function levelOrder(root) {
  let results = [];
  if (root === null) {
    return results;
  }

  const queue = [root];
  while (queue.length > 0) {
    let nodesAtThisLevel = queue.length;
    let nodes = [];
    for (let i = 0; i < nodesAtThisLevel; ++i) {
      const node = queue.shift();
      if (node !== null) {
        nodes.push(node.val);
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (queue.right !== null) {
          queue.push(node.right);
        }
      }
    }
    if (nodes.length > 0) {
      results.push(nodes);
    }
  }

  return results;
}

console.log(levelOrder(a)); // [ [ 'a' ], [ 'b', 'c' ], [ 'd', 'e', 'f' ] ]
