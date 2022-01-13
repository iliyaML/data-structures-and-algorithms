// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const maxPathSum = (root) => {
  let pathSum = 0;
  const stack = [root];

  while (stack.length > 0) {
    let curNode = stack.pop();
    pathSum += curNode;

    if (curNode.left !== null) {
      stack.push(curNode.left);
    }
    if (curNode.right !== null) {
      stack.push(curNode.right);
    }
  }

  return pathSum;
};
