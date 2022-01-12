// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
  if (root === null) {
    return [];
  }
  const arr = [];
  const queue = [root];

  while (queue.length > 0) {
    const curNode = queue.shift();
    arr.push(curNode.val);

    if (curNode.left !== null) {
      queue.push(curNode.left);
    }
    if (curNode.right !== null) {
      queue.push(curNode.right);
    }
  }
  return arr;
};
