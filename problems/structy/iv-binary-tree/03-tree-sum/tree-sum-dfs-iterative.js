// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  if (root === null) {
    return 0;
  }

  let totalSum = 0;
  const stack = [root];
  while (stack.length > 0) {
    let curNode = stack.pop();
    totalSum += curNode.val;
    if (curNode.left !== null) {
      stack.push(curNode.left);
    }
    if (curNode.right !== null) {
      stack.push(curNode.right);
    }
  }

  return totalSum;
};
