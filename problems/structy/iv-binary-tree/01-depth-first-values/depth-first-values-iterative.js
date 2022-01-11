// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
  if (root === null) {
    return [];
  }

  const arr = [];
  const stack = [root];
  while (stack.length > 0) {
    const curNode = stack.pop();
    arr.push(curNode.val);

    if (curNode.right !== null) {
      stack.push(curNode.right);
    }
    if (curNode.left !== null) {
      stack.push(curNode.left);
    }
  }

  return arr;
};
