// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
  if (root === null) {
    return false;
  }

  const stack = [root];

  while (stack.length > 0) {
    let curNode = stack.pop();

    if (curNode.val === target) {
      return true;
    }

    if (curNode.left !== null) {
      stack.push(curNode.left);
    }

    if (curNode.right !== null) {
      stack.push(curNode.right);
    }
  }

  return false;
};
