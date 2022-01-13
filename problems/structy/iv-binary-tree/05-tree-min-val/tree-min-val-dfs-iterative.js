// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
  let minVal = Number.MAX_VALUE;
  const stack = [root];

  while (stack.length > 0) {
    let curNode = stack.pop();

    if (curNode.val < minVal) {
      minVal = curNode.val;
    }

    if (curNode.left !== null) {
      stack.push(curNode.left);
    }
    if (curNode.right !== null) {
      stack.push(curNode.right);
    }
  }

  return minVal;
};
